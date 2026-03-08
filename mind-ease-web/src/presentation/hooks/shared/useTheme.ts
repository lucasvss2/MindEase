import { useEffect, useCallback } from 'react'
import { ThemeMode, THEME_CLASSES } from '@/presentation/styles'
import { useThemeStore } from '@/presentation/stores/theme-store'

export function useTheme() {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    const root = document.documentElement

    Object.values(THEME_CLASSES).forEach((className) => {
      root.classList.remove(className)
    })

    root.classList.add(THEME_CLASSES[theme])
  }, [theme])

  const changeTheme = useCallback(
    (newTheme: ThemeMode) => {
      setTheme(newTheme)
    },
    [setTheme],
  )

  const toggleContrast = useCallback(() => {
    const currentTheme = useThemeStore.getState().theme
    if (currentTheme === 'light') setTheme('light-low-contrast')
    else if (currentTheme === 'light-low-contrast') setTheme('light-high-contrast')
    else setTheme('light')
  }, [setTheme])

  return {
    theme,
    changeTheme,
    toggleContrast,
    isLowContrast: theme === 'light-low-contrast',
    isHighContrast: theme === 'light-high-contrast',
  }
}
