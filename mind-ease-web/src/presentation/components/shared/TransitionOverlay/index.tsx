import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useReduceMotionStore } from '@/presentation/stores/reduce-motion-store'
import * as S from './styles'
import type { OverlayPhase } from './styles'

export const TransitionOverlay = () => {
  const location = useLocation()
  const { transitionOverlayEnabled, reduceMotion } = useReduceMotionStore()
  const [phase, setPhase] = useState<OverlayPhase>('hidden')

  useEffect(() => {
    if (!transitionOverlayEnabled || reduceMotion) return
    setPhase('entering')
    const fadeOutTimer = setTimeout(() => setPhase('exiting'), 150)
    const hideTimer = setTimeout(() => setPhase('hidden'), 500)
    return () => {
      clearTimeout(fadeOutTimer)
      clearTimeout(hideTimer)
    }
  }, [location.pathname, transitionOverlayEnabled, reduceMotion])

  if (!transitionOverlayEnabled || reduceMotion || phase === 'hidden') return null

  return <S.Overlay $phase={phase} />
}
