import { useState } from 'react'
import { Modal, Input, Select, DatePicker } from 'antd'
import { PlusOutlined, CloseOutlined } from '@ant-design/icons'
import { ResponsiveButton, ResponsiveInput, useCreateTask } from '@/presentation'
import type { TaskStatus } from '@/domain/models'
import * as S from './styles'

interface ChecklistItem {
  id: string
  text: string
}

interface CreateTaskModalProps {
  open: boolean
  onClose: () => void
  boardId: string
  columnId: string
  columnName: string
}

const STATUS_OPTIONS = [
  { value: 'TODO', label: 'A fazer' },
  { value: 'IN_PROGRESS', label: 'Em andamento' },
  { value: 'DONE', label: 'Concluído' },
]

const DEFAULT_STATE = {
  title: '',
  description: '',
  status: 'TODO' as TaskStatus,
  hours: '',
  dueDate: null as string | null,
  newChecklistItem: '',
  checklist: [] as ChecklistItem[],
}

export function CreateTaskModal({ open, onClose, boardId, columnId, columnName }: CreateTaskModalProps) {
  const [title, setTitle] = useState(DEFAULT_STATE.title)
  const [description, setDescription] = useState(DEFAULT_STATE.description)
  const [status, setStatus] = useState<TaskStatus>(DEFAULT_STATE.status)
  const [hours, setHours] = useState(DEFAULT_STATE.hours)
  const [dueDate, setDueDate] = useState<string | null>(DEFAULT_STATE.dueDate)
  const [newChecklistItem, setNewChecklistItem] = useState(DEFAULT_STATE.newChecklistItem)
  const [checklist, setChecklist] = useState<ChecklistItem[]>(DEFAULT_STATE.checklist)

  const { mutate: createTask, isPending } = useCreateTask(columnId)

  const handleAddChecklistItem = () => {
    const text = newChecklistItem.trim()
    if (!text) return
    setChecklist((prev) => [...prev, { id: crypto.randomUUID(), text }])
    setNewChecklistItem('')
  }

  const handleRemoveChecklistItem = (index: number) => {
    setChecklist((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    if (!title.trim()) return
    createTask(
      {
        boardId,
        columnId,
        title: title.trim(),
        description: description.trim() || undefined,
        status,
        hours: hours ? Number(hours) : undefined,
        dueDate: dueDate || undefined,
        checklist: checklist.length
          ? checklist.map((item) => ({ id: item.id, text: item.text, isConcluded: false as const }))
          : undefined,
      },
      { onSuccess: handleClose },
    )
  }

  const handleClose = () => {
    setTitle(DEFAULT_STATE.title)
    setDescription(DEFAULT_STATE.description)
    setStatus(DEFAULT_STATE.status)
    setHours(DEFAULT_STATE.hours)
    setDueDate(DEFAULT_STATE.dueDate)
    setNewChecklistItem(DEFAULT_STATE.newChecklistItem)
    setChecklist(DEFAULT_STATE.checklist)
    onClose()
  }

  return (
    <Modal
      title={`Novo card em "${columnName}"`}
      open={open}
      onCancel={handleClose}
      width={520}
      footer={
        <S.Footer>
          <ResponsiveButton
            type="default"
            width="260px"
            height="44px"
            onClick={handleSubmit}
            disabled={!title.trim() || isPending}
          >
            Criar Card
          </ResponsiveButton>
          <ResponsiveButton
            type="neutral"
            width="110px"
            height="44px"
            onClick={handleClose}
          >
            Cancelar
          </ResponsiveButton>
        </S.Footer>
      }
    >
      <S.Body>
        <S.FieldGroup>
          <S.Label>Título</S.Label>
          <ResponsiveInput
            placeholder="Ex: Implementar tela de login"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onPressEnter={handleSubmit}
          />
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Label>
            Descrição <S.Optional>(opcional)</S.Optional>
          </S.Label>
          <S.ResponsiveTextArea
            placeholder="Descreva a tarefa..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </S.FieldGroup>

        <S.Row>
          <S.HalfGroup>
            <S.Label>Status</S.Label>
            <Select
              value={status}
              onChange={(v) => setStatus(v)}
              options={STATUS_OPTIONS}
              style={{ width: '100%' }}
            />
          </S.HalfGroup>

          <S.HalfGroup>
            <S.Label>
              Horas estimadas <S.Optional>(opcional)</S.Optional>
            </S.Label>
            <Input
              type="number"
              min={0}
              placeholder="0"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
          </S.HalfGroup>
        </S.Row>

        <S.FieldGroup>
          <S.Label>
            Data de entrega <S.Optional>(opcional)</S.Optional>
          </S.Label>
          <DatePicker
            style={{ width: '100%' }}
            format="DD/MM/YYYY"
            placeholder="Selecione uma data"
            onChange={(date) =>
              setDueDate(date ? date.toISOString() : null)
            }
          />
        </S.FieldGroup>

        <S.ChecklistSection>
          <S.Label>
            Checklist <S.Optional>(opcional)</S.Optional>
          </S.Label>

          {checklist.length > 0 && (
            <S.ChecklistItems>
              {checklist.map((item, index) => (
                <S.ChecklistItemRow key={index}>
                  <S.ChecklistItemText>{item.text}</S.ChecklistItemText>
                  <S.RemoveButton
                    type="button"
                    onClick={() => handleRemoveChecklistItem(index)}
                    title="Remover"
                  >
                    <CloseOutlined />
                  </S.RemoveButton>
                </S.ChecklistItemRow>
              ))}
            </S.ChecklistItems>
          )}

          <S.AddChecklistRow>
            <Input
              placeholder="Novo item de checklist"
              value={newChecklistItem}
              onChange={(e) => setNewChecklistItem(e.target.value)}
              onPressEnter={handleAddChecklistItem}
            />
            <ResponsiveButton
              type="default"
              width="44px"
              height="32px"
              onClick={handleAddChecklistItem}
              disabled={!newChecklistItem.trim()}
            >
              <PlusOutlined />
            </ResponsiveButton>
          </S.AddChecklistRow>
        </S.ChecklistSection>
      </S.Body>
    </Modal>
  )
}
