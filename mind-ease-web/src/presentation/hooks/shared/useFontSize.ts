import { useLayoutEffect, useCallback } from 'react'
import { useFontSizeStore, FontSizeLevel } from '@/main/config/stores/font-size-store'

const OFFSET_MAP: Record<FontSizeLevel, number> = {
  1: 0,
  2: 4,
  3: 8,
}

export function useFontSize() {
  const { fontSizeLevel, setFontSizeLevel } = useFontSizeStore()

  useLayoutEffect(() => {
    const offset = OFFSET_MAP[fontSizeLevel]
    document.documentElement.style.setProperty('--font-size-offset', `${offset}px`)
  }, [fontSizeLevel])

  const changeFontSize = useCallback(
    (level: FontSizeLevel) => setFontSizeLevel(level),
    [setFontSizeLevel]
  )

  return { fontSizeLevel, changeFontSize }
}
