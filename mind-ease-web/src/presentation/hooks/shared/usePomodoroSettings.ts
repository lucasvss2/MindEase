import { usePomodoroSettingsStore } from "@/presentation/stores/pomodoro-settings-store"

export function usePomodoroSettings() {
  const {
    soundEnabled,
    notificationEnabled,
    pomodoroDuration,
    setSoundEnabled,
    setNotificationEnabled,
    setPomodoroDuration
  } = usePomodoroSettingsStore()

  const toggleSound = () => setSoundEnabled(!soundEnabled)
  const toggleNotification = () => setNotificationEnabled(!notificationEnabled)

  return {
    soundEnabled,
    notificationEnabled,
    pomodoroDuration,
    setSoundEnabled,
    setNotificationEnabled,
    setPomodoroDuration,
    toggleSound,
    toggleNotification
  }
}
