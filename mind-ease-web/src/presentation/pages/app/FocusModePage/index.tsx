import { FilterSidebar, PomodoroTimer, ResponsiveCard, useToggle, PageLayout } from "@/presentation"
import * as S from './styles'
export const FocusModePage = () => {
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(false)
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

      </S.FocusModePageContainer>
    </PageLayout>
  )
}
