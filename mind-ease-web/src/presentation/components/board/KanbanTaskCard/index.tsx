import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Modal, Tooltip } from 'antd'
import {
  HolderOutlined,
  MoreOutlined,
  DeleteOutlined,
  ClockCircleOutlined,
  PlusOutlined,
  FieldTimeOutlined,
  CloseOutlined,
} from '@ant-design/icons'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { useDeleteTask, useUpdateTask, useComplexity } from '@/presentation'
import type { Task, ChecklistItem } from '@/domain/models'
import * as S from './styles'

interface KanbanTaskCardProps {
  task: Task
}

export function KanbanTaskCard({ task }: KanbanTaskCardProps) {
  const navigate = useNavigate()
  const { mutate: deleteTask } = useDeleteTask(task.columnId)
  const { mutate: updateTask } = useUpdateTask(task.columnId)

  const [focusMinutes, setFocusMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)

  const [localChecklist, setLocalChecklist] = useState<ChecklistItem[]>(task.checklist ?? [])
  const [newItemText, setNewItemText] = useState('')

  const [editingTitle, setEditingTitle] = useState(false)
  const [titleDraft, setTitleDraft] = useState(task.title)
  const [editingDesc, setEditingDesc] = useState(false)
  const [descDraft, setDescDraft] = useState(task.description ?? '')

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

  const { complexityLevel } = useComplexity()
  const isSimplified = complexityLevel === 'simplified'

  const concludedCount = localChecklist.filter((i) => i.isConcluded).length

  const handleToggleItem = (itemId: string) => {
    const updated = localChecklist.map((i) =>
      i.id === itemId ? { ...i, isConcluded: !i.isConcluded } : i,
    )
    setLocalChecklist(updated)
    updateTask({ taskId: task.id, params: { checklist: updated } })
  }

  const handleDeleteItem = (itemId: string) => {
    const updated = localChecklist.filter((i) => i.id !== itemId)
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

  const handleTitleSave = () => {
    const text = titleDraft.trim()
    if (text && text !== task.title) {
      updateTask({ taskId: task.id, params: { title: text } })
    } else if (!text) {
      setTitleDraft(task.title)
    }
    setEditingTitle(false)
  }

  const handleDescSave = () => {
    const text = descDraft.trim()
    if (text !== (task.description ?? '')) {
      updateTask({ taskId: task.id, params: { description: text || null } })
    }
    setEditingDesc(false)
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
          {editingTitle ? (
            <S.CardTitleInput
              autoFocus
              value={titleDraft}
              onChange={(e) => setTitleDraft(e.target.value)}
              onBlur={handleTitleSave}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleTitleSave()
                if (e.key === 'Escape') { setTitleDraft(task.title); setEditingTitle(false) }
              }}
              onMouseDown={(e) => e.stopPropagation()}
            />
          ) : (
            <Tooltip title={task.title} placement="top">
              <S.CardTitle onDoubleClick={() => { setTitleDraft(task.title); setEditingTitle(true) }}>
                {task.title}
              </S.CardTitle>
            </Tooltip>
          )}
          {editingDesc ? (
            <S.CardDescInput
              autoFocus
              value={descDraft}
              onChange={(e) => setDescDraft(e.target.value)}
              onBlur={handleDescSave}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleDescSave() }
                if (e.key === 'Escape') { setDescDraft(task.description ?? ''); setEditingDesc(false) }
              }}
              onMouseDown={(e) => e.stopPropagation()}
              rows={2}
              placeholder="Adicionar descrição..."
            />
          ) : (
            <Tooltip title={task.description || undefined} placement="top">
              <S.CardDescription
                onDoubleClick={() => { setDescDraft(task.description ?? ''); setEditingDesc(true) }}
                data-empty={!task.description || undefined}
              >
                {task.description || 'Clique duas vezes para adicionar descrição...'}
              </S.CardDescription>
            </Tooltip>
          )}
        </S.CardTitleBlock>

        <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
          <S.MenuButton onClick={(e) => e.stopPropagation()}>
            <MoreOutlined />
          </S.MenuButton>
        </Dropdown>
      </S.CardHeader>

      {/* Checklist */}
      <S.ChecklistSection>
        {(!isSimplified || localChecklist.length > 0) && (
          <S.ChecklistLabel>
            Checklist{localChecklist.length > 0 ? ` (${concludedCount}/${localChecklist.length})` : ''}
          </S.ChecklistLabel>
        )}

        {!isSimplified && localChecklist.map((item) => (
          <S.ChecklistItem key={item.id} className={item.isConcluded ? 'concluded' : ''}>
            <input
              type="checkbox"
              checked={item.isConcluded}
              onChange={() => handleToggleItem(item.id)}
            />
            <Tooltip title={item.text} placement="top">
              <S.ChecklistItemText>{item.text}</S.ChecklistItemText>
            </Tooltip>
            <S.ChecklistDeleteButton
              type="button"
              onClick={(e) => { e.preventDefault(); handleDeleteItem(item.id) }}
              title="Remover item"
            >
              <CloseOutlined />
            </S.ChecklistDeleteButton>
          </S.ChecklistItem>
        ))}

        {!isSimplified && (
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
        )}
      </S.ChecklistSection>

      {/* Focus config */}
      {!isSimplified && (
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
      )}

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
