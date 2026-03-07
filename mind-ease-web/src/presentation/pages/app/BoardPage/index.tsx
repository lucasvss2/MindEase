import { FilterSidebar, useToggle, PageLayout } from "@/presentation";

export function BoardPage() {
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
      <div></div>
    </PageLayout>
  )
}
