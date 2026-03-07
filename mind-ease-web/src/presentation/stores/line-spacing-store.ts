import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type LineSpacingLevel = 1 | 2 | 3

interface LineSpacingStoreState {
  lineSpacingLevel: LineSpacingLevel
  setLineSpacingLevel: (level: LineSpacingLevel) => void
}

export const useLineSpacingStore = create<LineSpacingStoreState>()(
  persist(
    (set) => ({
      lineSpacingLevel: 1,
      setLineSpacingLevel: (level) => set({ lineSpacingLevel: level }),
    }),
    {
      name: 'mindease-line-spacing',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
