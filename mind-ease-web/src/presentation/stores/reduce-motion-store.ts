import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface ReduceMotionState {
  reduceMotion: boolean
  transitionOverlayEnabled: boolean
  setReduceMotion: (value: boolean) => void
  setTransitionOverlayEnabled: (value: boolean) => void
}

export const useReduceMotionStore = create<ReduceMotionState>()(
  persist(
    (set) => ({
      reduceMotion: false,
      transitionOverlayEnabled: true,
      setReduceMotion: (reduceMotion) => set({ reduceMotion }),
      setTransitionOverlayEnabled: (transitionOverlayEnabled) => set({ transitionOverlayEnabled }),
    }),
    {
      name: 'mindease-reduce-motion',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
