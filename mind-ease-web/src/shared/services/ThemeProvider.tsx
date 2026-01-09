// src/components/ThemeProvider.tsx
import React, { useEffect } from 'react'
import { useThemeStore, ThemeContext } from '@/shared'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    // Aplicar o tema usando o data-attribute para Panda CSS
    const applyTheme = () => {
      // Definir o atributo data-color-mode para o Panda CSS
      document.documentElement.setAttribute('data-color-mode', theme)

      // Atualizar a classe para compatibilidade com outros sistemas de tema
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
        document.documentElement.classList.remove('light')
      } else {
        document.documentElement.classList.add('light')
        document.documentElement.classList.remove('dark')
      }
    }

    applyTheme()
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
