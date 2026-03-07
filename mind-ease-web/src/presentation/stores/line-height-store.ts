import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type LineHeightLevel = 1 | 2 | 3

interface LineHeightStoreState {
  lineHeightLevel: LineHeightLevel
  setLineHeightLevel: (level: LineHeightLevel) => void
}

export const useLineHeightStore = create<LineHeightStoreState>()(
  persist(
    (set) => ({
      lineHeightLevel: 1,
      setLineHeightLevel: (level) => set({ lineHeightLevel: level }),
    }),
    {
      name: 'mindease-line-height',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
