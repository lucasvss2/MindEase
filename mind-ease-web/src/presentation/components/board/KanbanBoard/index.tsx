import { useState, useCallback, useMemo, useEffect } from 'react'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  closestCenter,
  pointerWithin,
  rectIntersection,
} from '@dnd-kit/core'
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { PlusOutlined } from '@ant-design/icons'
import { useQueryClient } from '@tanstack/react-query'
import { useColumns, useCreateColumn, useReorderColumns } from '@/presentation'
import { makeRemoteUpdateTask, makeRemoteReorderTasks } from '@/infra/factories'
import type { Column, Task } from '@/domain/models'
import { KanbanColumn } from '../KanbanColumn'
import { KanbanTaskCard } from '../KanbanTaskCard'
import * as S from './styles'

interface KanbanBoardProps {
  boardId: string
}

export function KanbanBoard({ boardId }: KanbanBoardProps) {
  const { data: columns = [] } = useColumns(boardId)
  const { mutate: createColumn, isPending } = useCreateColumn(boardId)
  const { mutate: reorderColumns } = useReorderColumns(boardId)
  const queryClient = useQueryClient()

  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [activeTaskOriginalColumnId, setActiveTaskOriginalColumnId] = useState<string | null>(null)

  useEffect(() => {
    // Removed local storage auto-save for column order as it is now persisted strictly via API.
  }, [columns, boardId])

  const orderedColumns = useMemo(() => {
    return [...columns].sort((a, b) => {
      const posA = a.position ?? Infinity
      const posB = b.position ?? Infinity
      return posA - posB
    })
  }, [columns])

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
  )

  const getTasksForColumn = useCallback(
    (columnId: string): Task[] =>
      queryClient.getQueryData<Task[]>(['tasks', columnId]) ?? [],
    [queryClient],
  )

  const collisionDetection = useCallback(
    (args: Parameters<typeof closestCenter>[0]) => {
      if (activeColumn) {
        return closestCenter(args)
      }
      const pointerCollisions = pointerWithin(args)
      if (pointerCollisions.length > 0) return pointerCollisions
      return rectIntersection(args)
    },
    [activeColumn],
  )

  const handleDragStart = ({ active }: DragStartEvent) => {
    const type = active.data.current?.type
    if (type === 'column') {
      const col = orderedColumns.find((c) => c.id === active.id)
      if (col) setActiveColumn(col)
    } else if (type === 'task') {
      const columnId = active.data.current?.columnId as string
      const tasks = getTasksForColumn(columnId)
      const task = tasks.find((t) => t.id === active.id)
      if (task) {
        setActiveTask(task)
        setActiveTaskOriginalColumnId(columnId)
      }
    }
  }

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    if (!over) return
    if (active.data.current?.type !== 'task') return

    const activeColumnId = active.data.current?.columnId as string
    const overType = over.data.current?.type
    const overColumnId =
      overType === 'column'
        ? (over.id as string)
        : (over.data.current?.columnId as string)

    if (!overColumnId || activeColumnId === overColumnId) return

    const activeTasks = getTasksForColumn(activeColumnId)
    const task = activeTasks.find((t) => t.id === active.id)
    if (!task) return

    queryClient.setQueryData<Task[]>(
      ['tasks', activeColumnId],
      (prev) => (prev ?? []).filter((t) => t.id !== active.id),
    )

    queryClient.setQueryData<Task[]>(
      ['tasks', overColumnId],
      (prev) => [...(prev ?? []), { ...task, columnId: overColumnId }],
    )

    setActiveTask((t) => (t ? { ...t, columnId: overColumnId } : null))
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    const type = active.data.current?.type
    setActiveColumn(null)

    if (type === 'column') {
      if (!over || active.id === over.id) return
      const oldIndex = orderedColumns.findIndex((c) => c.id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c.id === over.id)
      if (oldIndex !== -1 && newIndex !== -1) {
        const reordered = arrayMove(orderedColumns, oldIndex, newIndex)
        const reorderedWithPosition = reordered.map((c, index) => ({ ...c, position: index }))

        queryClient.setQueryData<Column[]>(['columns', boardId], reorderedWithPosition)
        reorderColumns({ columnIds: reorderedWithPosition.map(c => c.id) })
      }
      return
    }

    if (type === 'task') {
      const task = activeTask
      const originalColumnId = activeTaskOriginalColumnId
      setActiveTask(null)
      setActiveTaskOriginalColumnId(null)
      if (!task || !over || !originalColumnId) return

      const overType = over.data.current?.type
      const targetColumnId =
        overType === 'column'
          ? (over.id as string)
          : (over.data.current?.columnId as string)

      if (!targetColumnId) return

      if (originalColumnId !== targetColumnId) {
        // Mover entre colunas — persiste no backend
        makeRemoteUpdateTask()
          .update(task.id, { columnId: targetColumnId })
          .then(() => {
            queryClient.invalidateQueries({ queryKey: ['tasks', originalColumnId] })
            queryClient.invalidateQueries({ queryKey: ['tasks', targetColumnId] })
          })
          .catch(() => {
            queryClient.invalidateQueries({ queryKey: ['tasks', originalColumnId] })
            queryClient.invalidateQueries({ queryKey: ['tasks', targetColumnId] })
          })
      } else {
        // Reordenar dentro da mesma coluna — salva ordem no localStorage
        const currentTasks = getTasksForColumn(originalColumnId)
        const oldIndex = currentTasks.findIndex((t) => t.id === task.id)

        let newIndex: number
        if (overType === 'task') {
          newIndex = currentTasks.findIndex((t) => t.id === over.id)
        } else {
          // Solto sobre a coluna (área vazia) → move para o fim
          newIndex = currentTasks.length - 1
        }

        if (oldIndex === -1 || newIndex === -1 || oldIndex === newIndex) return

        const reordered = arrayMove(currentTasks, oldIndex, newIndex)
        const reorderedWithPosition = reordered.map((t, index) => ({ ...t, position: index }))

        queryClient.setQueryData<Task[]>(['tasks', originalColumnId], reorderedWithPosition)
        makeRemoteReorderTasks().reorder(originalColumnId, { taskIds: reorderedWithPosition.map(t => t.id) })
      }
    }
  }

  const handleAddColumn = () => {
    const count = orderedColumns.length + 1
    createColumn({ name: `Coluna ${count}` })
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetection}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={orderedColumns.map((c) => c.id)} strategy={horizontalListSortingStrategy}>
        <S.Board>
          {orderedColumns.map((column) => (
            <KanbanColumn key={column.id} column={column} boardId={boardId} />
          ))}

          <S.AddColumnButton onClick={handleAddColumn} disabled={isPending}>
            <PlusOutlined /> Nova Coluna
          </S.AddColumnButton>
        </S.Board>
      </SortableContext>

      <DragOverlay>
        {activeColumn && <KanbanColumn column={activeColumn} boardId={boardId} />}
        {activeTask && <KanbanTaskCard task={activeTask} />}
      </DragOverlay>
    </DndContext>
  )
}

