import { usePomodoroSettingsStore } from '@/presentation/stores/pomodoro-settings-store'

export function usePomodoroSettings() {
  const {
    soundEnabled,
    notificationEnabled,
    pomodoroDuration,
    breakDuration,
    cognitiveAlertThreshold,
    setSoundEnabled,
    setNotificationEnabled,
    setPomodoroDuration,
    setBreakDuration,
    setCognitiveAlertThreshold,
  } = usePomodoroSettingsStore()

  const toggleSound = () => setSoundEnabled(!soundEnabled)
  const toggleNotification = () => setNotificationEnabled(!notificationEnabled)

  return {
    soundEnabled,
    notificationEnabled,
    pomodoroDuration,
    breakDuration,
    cognitiveAlertThreshold,
    setSoundEnabled,
    setNotificationEnabled,
    setPomodoroDuration,
    setBreakDuration,
    setCognitiveAlertThreshold,
    toggleSound,
    toggleNotification,
  }
}
