import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface PomodoroSettingsState {
  soundEnabled: boolean
  notificationEnabled: boolean
  setSoundEnabled: (value: boolean) => void
  setNotificationEnabled: (value: boolean) => void
}

export const usePomodoroSettingsStore = create<PomodoroSettingsState>()(
  persist(
    (set) => ({
      soundEnabled: true,
      notificationEnabled: true,
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      setNotificationEnabled: (notificationEnabled) => set({ notificationEnabled }),
    }),
    {
      name: 'pomodoro-settings-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
