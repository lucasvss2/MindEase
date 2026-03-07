import { PageLayout } from "@/layouts"
import { FilterSidebar, ResponsiveCard, useToggle } from "@/presentation"
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
        <ResponsiveCard $width="60%" $height="60%">
          <S.Title>Pomodoro</S.Title>
        </ResponsiveCard>
      </S.FocusModePageContainer>
    </PageLayout>
  )
}