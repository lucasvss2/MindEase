import { useEffect } from 'react'
import { FilterSidebar, PomodoroTimer, ResponsiveButton, ResponsiveCard, useToggle, PageLayout, usePomodoroSettings } from "@/presentation"
import { useNavigate, useSearchParams } from 'react-router-dom'
import * as S from './styles'
export const FocusModePage = () => {
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(false)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { setPomodoroDuration, setBreakDuration } = usePomodoroSettings()
  const taskTitle = searchParams.get('title')

  useEffect(() => {
    const focus = Number(searchParams.get('focus'))
    const breakMin = Number(searchParams.get('break'))
    if (focus > 0) setPomodoroDuration(focus)
    if (breakMin > 0) setBreakDuration(breakMin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
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
        <ResponsiveCard
          $width="100%"
          $height="auto"
          style={{ maxWidth: '800px', flex: 1, minHeight: '400px', padding: '24px' }}
        >
          <S.Title>Timer Pomodoro</S.Title>
          {taskTitle && (
            <S.TaskTitle>Em foco: {taskTitle}</S.TaskTitle>
          )}
          <PomodoroTimer />
        </ResponsiveCard>
        <ResponsiveButton type="neutral" width="200px" height="44px" onClick={() => navigate('/boards')} style={{ marginTop: '16px' }}>
          ← Voltar para Tarefas
        </ResponsiveButton>
      </S.FocusModePageContainer>
    </PageLayout>
  )
}
