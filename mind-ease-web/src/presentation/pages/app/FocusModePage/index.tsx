import { FilterSidebar, PomodoroTimer, ResponsiveButton, ResponsiveCard, useToggle, PageLayout } from "@/presentation"
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
export const FocusModePage = () => {
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(false)
  const navigate = useNavigate()
  return (
    <PageLayout
      title="Modo Foco"
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
      <S.FocusModePageContainer>
        <ResponsiveCard $width="60%" $height="70%">
          <S.Title>Timer Pomodoro</S.Title>
          <PomodoroTimer />
        </ResponsiveCard>
        <ResponsiveButton type="neutral" width="200px" height="44px" onClick={() => navigate('/boards')}>
          ← Voltar para Tarefas
        </ResponsiveButton>
      </S.FocusModePageContainer>
    </PageLayout>
  )
}
