import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBoards } from '@/presentation'
import * as S from './styles'

interface BoardSwitcherSectionProps {
  activeBoardId: string
}

export function BoardSwitcherSection({ activeBoardId }: BoardSwitcherSectionProps) {
  const navigate = useNavigate()
  const { data: boards = [] } = useBoards()
  const [open, setOpen] = useState(true)

  return (
    <S.Container>
      <S.Header onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
        <S.HeaderLabel>Quadros ({boards.length})</S.HeaderLabel>
        <S.Chevron $open={open}>▼</S.Chevron>
      </S.Header>

      {open && (
        <S.List>
          {boards.map((board) => (
            <S.Item
              key={board.id}
              $active={board.id === activeBoardId}
              onClick={() => navigate(`/board/${board.id}`)}
              title={board.name}
            >
              <S.ColorDot $color={board.color} />
              <S.BoardName>{board.name}</S.BoardName>
            </S.Item>
          ))}
        </S.List>
      )}
    </S.Container>
  )
}
