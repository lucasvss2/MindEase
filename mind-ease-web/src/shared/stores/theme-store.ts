import { createJSONStorage, devtools, persist } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

import { createIndexedDBStorage } from '@/shared'

type ThemeMode = 'light' | 'dark'

export interface ThemeState {
  theme: ThemeMode
  toggleTheme: () => void
}

export const useThemeStore = createWithEqualityFn<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: 'light',
        toggleTheme: () =>
          set((state) => ({
            theme: state.theme === 'light' ? 'dark' : 'light',
          })),
      }),
      {
        name: 'theme-store',
        storage: createJSONStorage(createIndexedDBStorage),
      },
    ),
    { name: 'theme-store' },
  ),
  shallow,
)
