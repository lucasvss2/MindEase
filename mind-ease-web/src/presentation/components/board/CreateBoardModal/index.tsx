import { useState } from 'react'
import { Modal } from 'antd'
import { ResponsiveButton, ResponsiveInput, useCreateBoard } from '@/presentation'
import * as S from './styles'

const BOARD_COLORS = [
  '#87C4E8',
  '#80DED9',
  '#B8A9E0',
  '#FF85BB',
  '#FFAD85',
  '#FFD94A',
  '#FF7070',
  '#7B9EA6',
]

interface CreateBoardModalProps {
  open: boolean
  onClose: () => void
}

export function CreateBoardModal({ open, onClose }: CreateBoardModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState(BOARD_COLORS[0])
  const { mutate, isPending } = useCreateBoard()

  const handleSubmit = () => {
    if (!name.trim()) return
    mutate(
      { name: name.trim(), description: description.trim() || undefined, color },
      { onSuccess: handleClose },
    )
  }

  const handleClose = () => {
    setName('')
    setDescription('')
    setColor(BOARD_COLORS[0])
    onClose()
  }

  return (
    <Modal
      title="Criar Novo Quadro"
      open={open}
      onCancel={handleClose}
      maskClosable={false}
      width={480}
      footer={
        <S.Footer>
          <ResponsiveButton
            type="neutral"
            width="230px"
            height="48px"
            onClick={handleClose}
          >
            Cancelar
          </ResponsiveButton>
          <ResponsiveButton
            type="default"
            width="230px"
            height="48px"
            onClick={handleSubmit}
            disabled={!name.trim() || isPending}
          >
            Criar Quadro
          </ResponsiveButton>
        </S.Footer>
      }
    >
      <S.Body>
        <S.FieldGroup>
          <S.Label>Nome do Quadro</S.Label>
          <ResponsiveInput
            id='name-field'
            name='name'
            placeholder="Ex: Projeto Marketing"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onPressEnter={handleSubmit}
          />
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Label>Descrição <S.Optional>(opcional)</S.Optional></S.Label>
          <S.ResponsiveTextArea
            id='description-field'
            name='description'
            placeholder="Ex: Board para tarefas do projeto X"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Label>Cor do Quadro</S.Label>
          <S.ColorGrid>
            {BOARD_COLORS.map((c) => (
              <S.ColorSwatch
                key={c}
                $color={c}
                $selected={color === c}
                onClick={() => setColor(c)}
              >
                {color === c && <S.SelectionDot />}
              </S.ColorSwatch>
            ))}
          </S.ColorGrid>
        </S.FieldGroup>
      </S.Body>
    </Modal>
  )
}
