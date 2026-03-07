import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Modal } from 'antd'
import {
  HolderOutlined,
  MoreOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  PlusOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useDeleteTask, useUpdateTask } from '@/presentation'
import type { Task, ChecklistItem } from '@/domain/models'
import * as S from './styles'

interface KanbanTaskCardProps {
  task: Task
}

export function KanbanTaskCard({ task }: KanbanTaskCardProps) {
  const navigate = useNavigate()
  const { mutate: deleteTask } = useDeleteTask(task.columnId)
  const { mutate: updateTask } = useUpdateTask(task.columnId)

  // Local focus config stored per card (UI only)
  const [focusMinutes, setFocusMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)

  // Local checklist optimistic state
  const [localChecklist, setLocalChecklist] = useState<ChecklistItem[]>(task.checklist ?? [])
  const [newItemText, setNewItemText] = useState('')

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { type: 'task', columnId: task.columnId } })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  }

  const concludedCount = localChecklist.filter((i) => i.isConcluded).length

  const handleToggleItem = (itemId: string) => {
    const updated = localChecklist.map((i) =>
      i.id === itemId ? { ...i, isConcluded: !i.isConcluded } : i,
    )
    setLocalChecklist(updated)
    updateTask({ taskId: task.id, params: { checklist: updated } })
  }

  const handleAddItem = () => {
    const text = newItemText.trim()
    if (!text) return
    const newItem: ChecklistItem = { id: crypto.randomUUID(), text, isConcluded: false }
    const updated = [...localChecklist, newItem]
    setLocalChecklist(updated)
    setNewItemText('')
    updateTask({ taskId: task.id, params: { checklist: updated } })
  }

  const handleDelete = () => {
    Modal.confirm({
      title: 'Excluir tarefa',
      content: `Tem certeza que deseja excluir "${task.title}"?`,
      okText: 'Excluir',
      cancelText: 'Cancelar',
      okButtonProps: { danger: true },
      onOk: () => deleteTask(task.id),
    })
  }

  const handleStartFocus = () => {
    navigate(`/focus?taskId=${task.id}&focus=${focusMinutes}&break=${breakMinutes}`)
  }

  const menuItems = [
    {
      key: 'delete',
      icon: <DeleteOutlined />,
      label: 'Excluir',
      danger: true,
      onClick: handleDelete,
    },
  ]

  // Total elapsed hours displayed
  const hours = task.hours ?? 0
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  const timeLabel = h > 0 ? `${h}h ${m}m 0s` : `${m}m 0s`

  return (
    <S.Card ref={setNodeRef} style={style}>
      {/* Header */}
      <S.CardHeader>
        <S.DragHandle {...attributes} {...listeners}>
          <HolderOutlined />
        </S.DragHandle>

        <S.CardTitleBlock>
          <S.CardTitle>{task.title}</S.CardTitle>
          {task.description && <S.CardDescription>{task.description}</S.CardDescription>}
        </S.CardTitleBlock>

        <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
          <S.MenuButton onClick={(e) => e.stopPropagation()}>
            <MoreOutlined />
          </S.MenuButton>
        </Dropdown>
      </S.CardHeader>

      {/* Checklist */}
      <S.ChecklistSection>
        <S.ChecklistLabel>
          Checklist{localChecklist.length > 0 ? ` (${concludedCount}/${localChecklist.length})` : ''}
        </S.ChecklistLabel>

        {localChecklist.map((item) => (
          <S.ChecklistItem key={item.id} className={item.isConcluded ? 'concluded' : ''}>
            <input
              type="checkbox"
              checked={item.isConcluded}
              onChange={() => handleToggleItem(item.id)}
            />
            <span>{item.text}</span>
          </S.ChecklistItem>
        ))}

        <S.AddChecklistRow>
          <S.AddChecklistInput
            placeholder="Adicionar item..."
            value={newItemText}
            onChange={(e) => setNewItemText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddItem()
            }}
          />
          <S.AddChecklistButton onClick={handleAddItem} type="button">
            <PlusOutlined />
          </S.AddChecklistButton>
        </S.AddChecklistRow>
      </S.ChecklistSection>

      {/* Focus config */}
      <S.FocusSection>
        <S.FocusLabel>
          <FieldTimeOutlined />
          Configurações de Foco
        </S.FocusLabel>

        <S.FocusRow>
          <S.FocusInput
            type="number"
            min={1}
            max={120}
            value={focusMinutes}
            onChange={(e) => setFocusMinutes(Number(e.target.value))}
          />
          <S.FocusUnit>min de foco</S.FocusUnit>
        </S.FocusRow>

        <S.FocusRow>
          <S.FocusInput
            type="number"
            min={1}
            max={60}
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(Number(e.target.value))}
          />
          <S.FocusUnit>min de descanso</S.FocusUnit>
        </S.FocusRow>
      </S.FocusSection>

      {/* Footer */}
      <S.CardFooter>
        <S.TimerDisplay>
          <ClockCircleOutlined />
          {timeLabel}
        </S.TimerDisplay>

        <S.StartFocusButton onClick={handleStartFocus} type="button">
          <ClockCircleOutlined />
          Iniciar Foco
        </S.StartFocusButton>
      </S.CardFooter>
    </S.Card>
  )
}
