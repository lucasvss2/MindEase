import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type LetterSpacingLevel = 1 | 2 | 3

interface LetterSpacingStoreState {
  letterSpacingLevel: LetterSpacingLevel
  setLetterSpacingLevel: (level: LetterSpacingLevel) => void
}

export const useLetterSpacingStore = create<LetterSpacingStoreState>()(
  persist(
    (set) => ({
      letterSpacingLevel: 1,
      setLetterSpacingLevel: (level) => set({ letterSpacingLevel: level }),
    }),
    {
      name: 'mindease-letter-spacing',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
