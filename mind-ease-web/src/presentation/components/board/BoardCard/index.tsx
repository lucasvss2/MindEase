import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Modal } from 'antd'
import { MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDeleteBoard, EditBoardModal } from '@/presentation'
import type { Board } from '@/domain/models'
import * as S from './styles'

interface BoardCardProps {
  board: Board
}

export function BoardCard({ board }: BoardCardProps) {
  const navigate = useNavigate()
  const [isEditOpen, setIsEditOpen] = useState(false)
  const { mutate: deleteBoard, isPending } = useDeleteBoard()

  const handleDelete = () => {
    Modal.confirm({
      title: 'Excluir quadro',
      content: `Tem certeza que deseja excluir "${board.name}"? Esta ação não pode ser desfeita.`,
      okText: 'Excluir',
      cancelText: 'Cancelar',
      okButtonProps: { danger: true },
      onOk: () => deleteBoard(board.id),
    })
  }

  const menuItems = [
    {
      key: 'edit',
      icon: <EditOutlined />,
      label: 'Editar',
      onClick: () => setIsEditOpen(true),
    },
    {
      key: 'delete',
      icon: <DeleteOutlined />,
      label: 'Excluir',
      danger: true,
      disabled: isPending,
      onClick: handleDelete,
    },
  ]

  return (
    <>
      <S.Card onClick={() => navigate(`/board/${board.id}`)}>
        <S.TopRow>
          <S.ColorDot $color={board.color} />
          <Dropdown menu={{ items: menuItems }} trigger={['click']} placement="bottomRight">
            <S.MenuButton onClick={(e) => e.stopPropagation()}>
              <MoreOutlined style={{ fontSize: 18 }} />
            </S.MenuButton>
          </Dropdown>
        </S.TopRow>

        <S.Name>{board.name}</S.Name>

        {board.description && (
          <S.Description>{board.description}</S.Description>
        )}
      </S.Card>

      <EditBoardModal
        board={board}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />
    </>
  )
}
