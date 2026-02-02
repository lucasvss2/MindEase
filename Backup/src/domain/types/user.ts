export interface User {
  id: number
  name: string
  email: string
  area: string
  area_profile: 'READER' | 'EDITOR' | 'ADMIN'
  is_admin: boolean
  created_at: string
  updated_at: string
  last_access_at: string
}

export interface UserData {
  id: number
  created_at: string
  updated_at: string
  last_access_at: string
  email: string
  name: string
  is_admin: boolean
  area_profile: 'SYS_ADMIN' | 'ADMIN' | 'EDITOR' | 'READER'
}

export interface SelectUserActions {
  newProfile?: 'SYS_ADMIN' | 'ADMIN' | 'EDITOR' | 'READER'
  user: User
  type: 'DELETE_USER' | 'EDIT_USER' | 'ACTIVATE_USER' | 'CHANGE_PROFILE'
}

export type AddUserForm = {
  id: number
  users_to_bind: {
    user_id: number
    profile: 'READER' | 'EDITOR' | 'ADMIN'
  }[]
}

export type RemoveUserForm = {
  id: number
  users_to_unbind: number[]
}

export interface UserBindFilters {
  page?: number
  page_size?: number
  [key: string]: any
}
