import { useState } from 'react'
import { Modal } from 'antd'
import { ResponsiveButton, ResponsiveInput, useUpdateBoard } from '@/presentation'
import type { Board } from '@/domain/models'
import * as S from '../CreateBoardModal/styles'

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

interface EditBoardModalProps {
  board: Board
  open: boolean
  onClose: () => void
}

function EditBoardModalContent({ board, onClose }: Omit<EditBoardModalProps, 'open'>) {
  const [name, setName] = useState(board.name)
  const [description, setDescription] = useState(board.description ?? '')
  const [color, setColor] = useState(board.color)
  const { mutate, isPending } = useUpdateBoard()

  const handleSubmit = () => {
    if (!name.trim()) return
    mutate(
      { id: board.id, params: { name: name.trim(), description: description.trim() || null, color } },
      { onSuccess: onClose },
    )
  }

  return (
    <>
      <S.Body>
        <S.FieldGroup>
          <S.Label>Nome do Quadro</S.Label>
          <ResponsiveInput
            placeholder="Ex: Projeto Marketing"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onPressEnter={handleSubmit}
          />
        </S.FieldGroup>

        <S.FieldGroup>
          <S.Label>Descrição <S.Optional>(opcional)</S.Optional></S.Label>
          <S.ResponsiveTextArea
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

      <S.Footer>
        <ResponsiveButton
          type="default"
          width="280px"
          height="48px"
          onClick={handleSubmit}
          disabled={!name.trim() || isPending}
        >
          Salvar Alterações
        </ResponsiveButton>
        <ResponsiveButton
          type="neutral"
          width="120px"
          height="48px"
          onClick={onClose}
        >
          Cancelar
        </ResponsiveButton>
      </S.Footer>
    </>
  )
}

export function EditBoardModal({ board, open, onClose }: EditBoardModalProps) {
  return (
    <Modal
      title="Editar Quadro"
      open={open}
      onCancel={onClose}
      width={480}
      footer={null}
    >
      <EditBoardModalContent key={board.id + String(open)} board={board} onClose={onClose} />
    </Modal>
  )
}
