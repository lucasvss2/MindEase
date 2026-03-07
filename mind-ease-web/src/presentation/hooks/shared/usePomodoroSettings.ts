import { usePomodoroSettingsStore } from "@/main/config/stores/pomodoro-settings-store"

export function usePomodoroSettings() {
  const {
    soundEnabled,
    notificationEnabled,
    setSoundEnabled,
    setNotificationEnabled
  } = usePomodoroSettingsStore()

  const toggleSound = () => setSoundEnabled(!soundEnabled)
  const toggleNotification = () => setNotificationEnabled(!notificationEnabled)

  return {
    soundEnabled,
    notificationEnabled,
    setSoundEnabled,
    setNotificationEnabled,
    toggleSound,
    toggleNotification
  }
}
