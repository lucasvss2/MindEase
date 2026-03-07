import { useState } from 'react'
import { Dropdown, Modal } from 'antd'
import { PlusOutlined, HolderOutlined, MoreOutlined, EditOutlined, DeleteOutlined, BgColorsOutlined } from '@ant-design/icons'
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useDeleteColumn, useUpdateColumn, useTasks } from '@/presentation'
import { makeRemoteDeleteTask } from '@/infra/factories'
import type { Column } from '@/domain/models'
import { KanbanTaskCard } from '../KanbanTaskCard'
import { CreateTaskModal } from '../CreateTaskModal'
import * as S from './styles'

const COLUMN_COLORS = [
  { value: '', label: 'Padrão' },
  { value: '#F2F2F5', label: 'Cinza' },
  { value: '#FCDEDE', label: 'Salmão' },
  { value: '#FFF7D2', label: 'Amarelo' },
  { value: '#DAEEFF', label: 'Azul' },
  { value: '#DCF5DC', label: 'Verde' },
  { value: '#EEE4FF', label: 'Lilás' },
  { value: '#FFE4F4', label: 'Rosa' },
  { value: '#D8FFF4', label: 'Menta' },
]

interface KanbanColumnProps {
  column: Column
  boardId: string
}

export function KanbanColumn({ column, boardId }: KanbanColumnProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [editName, setEditName] = useState(column.name)
  const [createTaskOpen, setCreateTaskOpen] = useState(false)
  const [isPickingColor, setIsPickingColor] = useState(false)

  const [columnColor, setColumnColorState] = useState<string>(
    () => localStorage.getItem(`column-color-${column.id}`) ?? '',
  )

  const setColumnColor = (color: string) => {
    if (color) {
      localStorage.setItem(`column-color-${column.id}`, color)
    } else {
      localStorage.removeItem(`column-color-${column.id}`)
    }
    setColumnColorState(color)
    setIsPickingColor(false)
  }

  const { mutate: deleteColumn } = useDeleteColumn(boardId)
  const { mutate: updateColumn } = useUpdateColumn(boardId)
  const { data: tasks = [] } = useTasks(column.id)

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: column.id, data: { type: 'column' } })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  }

  const handleRename = () => {
    const trimmed = editName.trim()
    if (trimmed && trimmed !== column.name) {
      updateColumn({ columnId: column.id, params: { name: trimmed } })
    }
    setIsEditing(false)
  }

  const handleDelete = () => {
    const hasTasks = tasks.length > 0
    Modal.confirm({
      title: 'Excluir coluna',
      content: hasTasks
        ? `A coluna "${column.name}" possui ${tasks.length} ${tasks.length === 1 ? 'tarefa' : 'tarefas'}. Ao excluir a coluna, todas as tarefas dentro dela também serão permanentemente apagadas. Deseja continuar?`
        : `Tem certeza que deseja excluir a coluna "${column.name}"?`,
      okText: 'Excluir',
      cancelText: 'Cancelar',
      okButtonProps: { danger: true },
      onOk: async () => {
        if (hasTasks) {
          const deleteTask = makeRemoteDeleteTask()
          await Promise.all(tasks.map((t) => deleteTask.delete(t.id)))
        }
        deleteColumn(column.id)
      },
    })
  }

  const menuItems = [
    {
      key: 'rename',
      icon: <EditOutlined />,
      label: 'Renomear',
      onClick: () => {
        setEditName(column.name)
        setIsEditing(true)
      },
    },
    {
      key: 'color',
      icon: <BgColorsOutlined />,
      label: 'Cor da coluna',
      onClick: () => setIsPickingColor((prev) => !prev),
    },
    {
      key: 'delete',
      icon: <DeleteOutlined />,
      label: 'Excluir',
      danger: true,
      onClick: handleDelete,
    },
  ]

  return (
    <S.Column ref={setNodeRef} style={style} $bgColor={columnColor || undefined}>
      <S.ColumnHeader>
        <S.DragHandle {...attributes} {...listeners}>
          <HolderOutlined />
        </S.DragHandle>

        {isEditing ? (
          <S.ColumnTitleInput
            autoFocus
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleRename()
              if (e.key === 'Escape') setIsEditing(false)
            }}
          />
        ) : (
          <S.ColumnTitle onDoubleClick={() => { setEditName(column.name); setIsEditing(true) }}>
            {column.name}
            {tasks.length > 0 && (
              <S.TaskCount> ({tasks.length})</S.TaskCount>
            )}
          </S.ColumnTitle>
        )}

        <S.ColumnActions>
          <S.MenuButton onClick={() => setCreateTaskOpen(true)} title="Nova tarefa">
            <PlusOutlined style={{ fontSize: 14 }} />
          </S.MenuButton>

          <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
            <S.MenuButton onClick={(e) => e.stopPropagation()}>
              <MoreOutlined style={{ fontSize: 16 }} />
            </S.MenuButton>
          </Dropdown>
        </S.ColumnActions>
      </S.ColumnHeader>

      {isPickingColor && (
        <S.ColorRow>
          {COLUMN_COLORS.map((c) => (
            <S.ColorDot
              key={c.value || 'default'}
              type="button"
              title={c.label}
              $color={c.value || '#f0f0f0'}
              $selected={columnColor === c.value}
              onClick={() => setColumnColor(c.value)}
            />
          ))}
        </S.ColorRow>
      )}

      <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
        <S.CardsList>
          {tasks.map((task) => (
            <KanbanTaskCard key={task.id} task={task} />
          ))}
        </S.CardsList>
      </SortableContext>

      <CreateTaskModal
        open={createTaskOpen}
        onClose={() => setCreateTaskOpen(false)}
        boardId={boardId}
        columnId={column.id}
        columnName={column.name}
      />
    </S.Column>
  )
}
