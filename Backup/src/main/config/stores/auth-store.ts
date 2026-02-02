// import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'
interface Authorization {
  user_id: number | undefined
  isUserAuthenticated: boolean
  id_token: string | undefined
  access_token: string | undefined
  refresh_token: string | undefined
  expires_in: number | undefined
  token_type: string | undefined
  permissions: 'SYS_ADMIN' | 'ADMIN' | 'EDITOR' | 'READER' | undefined
  active_area_id: number | undefined
}

interface AuthStoreState extends Authorization {
  signOut: () => void
}

const INITIAL_STATE: Authorization = {
  user_id: undefined,
  isUserAuthenticated: false,
  id_token: undefined,
  access_token: undefined,
  refresh_token: undefined,
  expires_in: undefined,
  token_type: undefined,
  permissions: undefined,
  active_area_id: undefined,
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
