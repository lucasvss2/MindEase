import { useState, useCallback, useLayoutEffect } from 'react'

export type FontType = 'lexend' | 'bitter' | 'jetbrains-mono'

const FONT_STORAGE_KEY = 'mindease-font'

const fonts: Record<FontType, string> = {
  lexend: "'Lexend', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  bitter: "'Bitter', Georgia, 'Times New Roman', serif",
  'jetbrains-mono': "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
}

export function useFont() {
  const [font, setFont] = useState<FontType>(() => {
    if (typeof window === 'undefined') return 'lexend'
    const stored = localStorage.getItem(FONT_STORAGE_KEY) as FontType
    return (stored && fonts[stored]) ? stored : 'lexend'
  })

  useLayoutEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--font-sans', fonts[font])
    localStorage.setItem(FONT_STORAGE_KEY, font)
  }, [font])

  const changeFont = useCallback((newFont: FontType) => {
    setFont(newFont)
  }, [])

  return {
    font,
    changeFont,
  }
}
