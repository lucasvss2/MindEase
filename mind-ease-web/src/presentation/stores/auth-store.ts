// import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'
import { User } from '@/domain/models'

interface Authorization {
  user: User | undefined
  isUserAuthenticated: boolean
  accessToken: string | undefined
  refreshToken: string | undefined
}

interface AuthStoreState extends Authorization {
  signOut: () => void
}

const INITIAL_STATE: Authorization = {
  user: undefined,
  isUserAuthenticated: false,
  accessToken: undefined,
  refreshToken: undefined,
}

const authStore = createWithEqualityFn<AuthStoreState>()(
  devtools(
    persist(
      (set) => ({
        ...INITIAL_STATE,

        signOut: () => {
          set({ ...INITIAL_STATE }, false, 'sign-out')
        },
      }),
      { name: 'bdc-auth-store' },
    ),
    { name: 'bdc-auth-store' },
  ),
  shallow,
)

export const signOut = authStore.getState().signOut

export default authStore
