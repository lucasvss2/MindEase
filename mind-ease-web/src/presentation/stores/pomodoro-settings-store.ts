import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface PomodoroSettingsState {
  soundEnabled: boolean
  notificationEnabled: boolean
  pomodoroDuration: number
  setSoundEnabled: (value: boolean) => void
  setNotificationEnabled: (value: boolean) => void
  setPomodoroDuration: (value: number) => void
}

export const usePomodoroSettingsStore = create<PomodoroSettingsState>()(
  persist(
    (set) => ({
      soundEnabled: true,
      notificationEnabled: true,
      pomodoroDuration: 25,
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      setNotificationEnabled: (notificationEnabled) => set({ notificationEnabled }),
      setPomodoroDuration: (pomodoroDuration) => set({ pomodoroDuration }),
    }),
    {
      name: 'pomodoro-settings-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
