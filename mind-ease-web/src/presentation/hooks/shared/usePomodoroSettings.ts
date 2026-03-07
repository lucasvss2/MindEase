import { usePomodoroSettingsStore } from '@/presentation/stores/pomodoro-settings-store'

export function usePomodoroSettings() {
  const {
    soundEnabled,
    notificationEnabled,
    pomodoroDuration,
    cognitiveAlertThreshold,
    setSoundEnabled,
    setNotificationEnabled,
    setPomodoroDuration,
    setCognitiveAlertThreshold,
  } = usePomodoroSettingsStore()

  const toggleSound = () => setSoundEnabled(!soundEnabled)
  const toggleNotification = () => setNotificationEnabled(!notificationEnabled)

  return {
    soundEnabled,
    notificationEnabled,
    pomodoroDuration,
    cognitiveAlertThreshold,
    setSoundEnabled,
    setNotificationEnabled,
    setPomodoroDuration,
    setCognitiveAlertThreshold,
    toggleSound,
    toggleNotification,
  }
}
