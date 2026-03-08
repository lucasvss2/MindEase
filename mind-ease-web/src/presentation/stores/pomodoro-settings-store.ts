import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface PomodoroSettingsState {
  soundEnabled: boolean
  notificationEnabled: boolean
  pomodoroDuration: number
  breakDuration: number
  cognitiveAlertThreshold: number
  setSoundEnabled: (value: boolean) => void
  setNotificationEnabled: (value: boolean) => void
  setPomodoroDuration: (value: number) => void
  setBreakDuration: (value: number) => void
  setCognitiveAlertThreshold: (value: number) => void
}

export const usePomodoroSettingsStore = create<PomodoroSettingsState>()(
  persist(
    (set) => ({
      soundEnabled: true,
      notificationEnabled: true,
      pomodoroDuration: 25,
      breakDuration: 5,
      cognitiveAlertThreshold: 45,
      setSoundEnabled: (soundEnabled) => set({ soundEnabled }),
      setNotificationEnabled: (notificationEnabled) => set({ notificationEnabled }),
      setPomodoroDuration: (pomodoroDuration) => set({ pomodoroDuration }),
      setBreakDuration: (breakDuration) => set({ breakDuration }),
      setCognitiveAlertThreshold: (cognitiveAlertThreshold) => set({ cognitiveAlertThreshold }),
    }),
    {
      name: 'pomodoro-settings-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
