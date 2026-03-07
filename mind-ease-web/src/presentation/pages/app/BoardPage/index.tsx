import { useParams } from 'react-router-dom'
import { FilterSidebar, useToggle, PageLayout, useBoard, KanbanBoard, usePomodoroSettings, useCognitiveAlert } from '@/presentation'
import * as S from './styles'
import { Divider } from 'antd'

export function BoardPage() {
  const { id } = useParams<{ id: string }>()
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(true)
  const { data: board } = useBoard(id!)
  const { cognitiveAlertThreshold } = usePomodoroSettings()
  useCognitiveAlert(cognitiveAlertThreshold)

  return (
    <PageLayout
      title="Board"
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
        <S.TitleRow>
          {board && <S.ColorDot $color={board.color} />}
          <S.Title>{board?.name ?? '...'}</S.Title>
        </S.TitleRow>

        {board?.description && (
          <S.Description>{board.description}</S.Description>
        )}
        <Divider style={{ margin: '0px', border: 'var(--color-buttonNeutralHoverBorder)' }} />
        {id && <KanbanBoard boardId={id} />}
      </S.Container>
    </PageLayout>
  )
}
