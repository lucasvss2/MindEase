import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { ThemeMode } from '@/main/config/styles'

interface ThemeStoreState {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
}

export const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      theme: 'light',
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'mindease-theme',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
