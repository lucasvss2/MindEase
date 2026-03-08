import { useLayoutEffect, useCallback } from 'react'
import { useLineSpacingStore, LineSpacingLevel } from '@/presentation/stores/line-spacing-store'

const OFFSET_MAP: Record<LineSpacingLevel, number> = {
  1: 0,
  2: 4,
  3: 8,
}

export function useLineSpacing() {
  const { lineSpacingLevel, setLineSpacingLevel } = useLineSpacingStore()

  useLayoutEffect(() => {
    const offset = OFFSET_MAP[lineSpacingLevel]
    const root = document.documentElement
    root.style.setProperty('--line-height-offset', `${offset}px`)
    root.style.setProperty('--letter-spacing-offset', `${offset}px`)
    root.style.setProperty('--word-spacing-offset', `${offset}px`)
  }, [lineSpacingLevel])

  const changeLineSpacing = useCallback(
    (level: LineSpacingLevel) => setLineSpacingLevel(level),
    [setLineSpacingLevel]
  )

  return { lineSpacingLevel, changeLineSpacing }
}
