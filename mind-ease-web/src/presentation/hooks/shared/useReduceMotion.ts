import { useEffect } from 'react'
import { useReduceMotionStore } from '@/presentation/stores/reduce-motion-store'

export function useReduceMotion() {
  const { reduceMotion, transitionOverlayEnabled, setReduceMotion, setTransitionOverlayEnabled } =
    useReduceMotionStore()

  useEffect(() => {
    if (reduceMotion) {
      document.documentElement.classList.add('reduce-motion')
      document.documentElement.style.setProperty('--reduce-motion', '1')
    } else {
      document.documentElement.classList.remove('reduce-motion')
      document.documentElement.style.setProperty('--reduce-motion', '0')
    }
  }, [reduceMotion])

  return { reduceMotion, transitionOverlayEnabled, setReduceMotion, setTransitionOverlayEnabled }
}
