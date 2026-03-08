import { useLayoutEffect, useCallback } from 'react'
import { useLetterSpacingStore, LetterSpacingLevel } from '@/presentation/stores/letter-spacing-store'

const OFFSET_MAP: Record<LetterSpacingLevel, number> = {
  1: 0,
  2: 2,
  3: 4,
}

export function useLetterSpacing() {
  const { letterSpacingLevel, setLetterSpacingLevel } = useLetterSpacingStore()

  useLayoutEffect(() => {
    const offset = OFFSET_MAP[letterSpacingLevel]
    document.documentElement.style.setProperty('--letter-spacing-offset', `${offset}px`)
  }, [letterSpacingLevel])

  const changeLetterSpacing = useCallback(
    (level: LetterSpacingLevel) => setLetterSpacingLevel(level),
    [setLetterSpacingLevel]
  )

  return { letterSpacingLevel, changeLetterSpacing }
}
