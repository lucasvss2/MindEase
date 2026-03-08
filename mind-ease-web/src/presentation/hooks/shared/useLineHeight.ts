import { useLayoutEffect, useCallback } from 'react'
import { useLineHeightStore, LineHeightLevel } from '@/presentation/stores/line-height-store'

const OFFSET_MAP: Record<LineHeightLevel, number> = {
  1: 0,
  2: 4,
  3: 8,
}

export function useLineHeight() {
  const { lineHeightLevel, setLineHeightLevel } = useLineHeightStore()

  useLayoutEffect(() => {
    const offset = OFFSET_MAP[lineHeightLevel]
    document.documentElement.style.setProperty('--line-height-offset', `${offset}px`)
  }, [lineHeightLevel])

  const changeLineHeight = useCallback(
    (level: LineHeightLevel) => setLineHeightLevel(level),
    [setLineHeightLevel]
  )

  return { lineHeightLevel, changeLineHeight }
}
