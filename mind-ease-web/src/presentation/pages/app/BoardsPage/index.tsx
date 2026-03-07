import { FilterSidebar, useToggle, PageLayout } from "@/presentation";
import * as S from "./styles";

export function BoardsPage() {
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(true)
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

      </S.Container>
    </PageLayout>
  )
}
