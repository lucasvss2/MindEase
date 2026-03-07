import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type FontSizeLevel = 1 | 2 | 3

interface FontSizeStoreState {
  fontSizeLevel: FontSizeLevel
  setFontSizeLevel: (level: FontSizeLevel) => void
}

export const useFontSizeStore = create<FontSizeStoreState>()(
  persist(
    (set) => ({
      fontSizeLevel: 1,
      setFontSizeLevel: (level) => set({ fontSizeLevel: level }),
    }),
    {
      name: 'mindease-font-size',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
