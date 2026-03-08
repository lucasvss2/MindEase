import { useState } from 'react'
import { FilterSidebar, useToggle, PageLayout, useBoards, ResponsiveButton, CreateBoardModal, BoardCard } from "@/presentation";
import { PlusOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { Divider } from 'antd';

export function BoardsPage() {
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { data: boards } = useBoards()

  const count = boards?.length ?? 0
  const label = count === 1 ? 'encontrado' : 'encontrados'

  return (
    <PageLayout
      title="Home"
      hideFloatButton
      showUserAvatar
      sidebar={
        <FilterSidebar
          isFilterDrawerOpen={isDrawerOpen}
          onClose={toggleFilterDrawer}
          filterFooter={null}
        />
      }
    >
      <S.Container>
        <S.Header>
          <S.Title>Quadros | <S.Subtitle>{count} {label}</S.Subtitle></S.Title>
          <ResponsiveButton type="default" onClick={() => setIsModalOpen(true)}>
            <PlusOutlined /> Criar novo quadro
          </ResponsiveButton>
        </S.Header>
        <Divider style={{ margin: '0px', marginBottom: '24px', border: 'var(--color-buttonNeutralHoverBorder)' }} />

        {count === 0 ? (
          <S.EmptyText>Nenhum quadro encontrado. Crie seu primeiro quadro!</S.EmptyText>
        ) : (
          <S.Grid>
            {boards!.map((board) => (
              <BoardCard key={board.id} board={board} />
            ))}
          </S.Grid>
        )}
      </S.Container>

      <CreateBoardModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </PageLayout>
  )
}
