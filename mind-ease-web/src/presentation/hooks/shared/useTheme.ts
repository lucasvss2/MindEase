import { useState, useEffect, useCallback } from 'react'
import { ThemeMode, THEME_CLASSES } from '@/main/config/styles'

const THEME_STORAGE_KEY = 'mindease-theme'

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light'
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null
    return stored || 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    // Remove all theme classes
    Object.values(THEME_CLASSES).forEach((className) => {
      root.classList.remove(className)
    })

    // Add current theme class
    root.classList.add(THEME_CLASSES[theme])

    // Persist to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const changeTheme = useCallback((newTheme: ThemeMode) => {
    setTheme(newTheme)
  }, [])

  const toggleContrast = useCallback(() => {
    setTheme((current) => {
      if (current === 'light') return 'light-low-contrast'
      if (current === 'light-low-contrast') return 'light-high-contrast'
      return 'light'
    })
  }, [])

  return {
    theme,
    changeTheme,
    toggleContrast,
    isLowContrast: theme === 'light-low-contrast',
    isHighContrast: theme === 'light-high-contrast',
  }
}
