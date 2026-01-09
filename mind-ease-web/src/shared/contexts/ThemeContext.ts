// src/app/contexts/ThemeContext.ts
import { createContext } from 'react'

export interface ThemeContextType {
  toggleTheme: () => void
  theme: 'light' | 'dark'
}

export const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  theme: 'light',
})
