import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type ComplexityLevel = 'simplified' | 'normal' | 'detailed'

interface ComplexityStoreState {
  complexityLevel: ComplexityLevel
  setComplexityLevel: (level: ComplexityLevel) => void
}

export const useComplexityStore = create<ComplexityStoreState>()(
  persist(
    (set) => ({
      complexityLevel: 'normal',
      setComplexityLevel: (level) => set({ complexityLevel: level }),
    }),
    {
      name: 'mindease-complexity',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
