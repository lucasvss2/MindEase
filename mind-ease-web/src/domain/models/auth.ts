import { User } from './user'

export type LoginResponse = {
  user: User
  accessToken: string
  refreshToken: string
}

export type AddAccountResponse = {
  user: User
  accessToken: string
  refreshToken: string
}

export type RefreshLoginResponse = {
  accessToken: string
}
