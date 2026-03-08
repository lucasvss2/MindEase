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
import { useColumns, useCreateColumn } from '@/presentation'
import { makeRemoteUpdateTask } from '@/infra/factories'
import type { Column, Task } from '@/domain/models'
import { KanbanColumn } from '../KanbanColumn'
import { KanbanTaskCard } from '../KanbanTaskCard'
import * as S from './styles'

const getColumnOrder = (boardId: string): string[] => {
  try {
    return JSON.parse(localStorage.getItem(`column-order-${boardId}`) ?? '[]')
  } catch {
    return []
  }
}

const saveColumnOrder = (boardId: string, ids: string[]) => {
  localStorage.setItem(`column-order-${boardId}`, JSON.stringify(ids))
}

interface KanbanBoardProps {
  boardId: string
}

export function KanbanBoard({ boardId }: KanbanBoardProps) {
  const { data: columns = [] } = useColumns(boardId)
  const { mutate: createColumn, isPending } = useCreateColumn(boardId)
  const queryClient = useQueryClient()

  const [activeColumn, setActiveColumn] = useState<Column | null>(null)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const [activeTaskOriginalColumnId, setActiveTaskOriginalColumnId] = useState<string | null>(null)

  useEffect(() => {
    if (columns.length === 0) return
    const savedOrder = getColumnOrder(boardId)
    const knownIds = new Set(savedOrder)
    const newIds = columns.filter((c) => !knownIds.has(c.id)).map((c) => c.id)
    if (newIds.length > 0) {
      saveColumnOrder(boardId, [...savedOrder, ...newIds])
    }
  }, [columns, boardId])

  const orderedColumns = useMemo(() => {
    const savedOrder = getColumnOrder(boardId)
    if (savedOrder.length === 0) return columns
    const orderMap = new Map(savedOrder.map((id, index) => [id, index]))
    return [...columns].sort((a, b) => {
      const ai = orderMap.get(a.id) ?? Infinity
      const bi = orderMap.get(b.id) ?? Infinity
      return ai - bi
    })
  }, [columns, boardId])

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
        saveColumnOrder(boardId, reordered.map((c) => c.id))
        queryClient.setQueryData<Column[]>(['columns', boardId], reordered)
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

