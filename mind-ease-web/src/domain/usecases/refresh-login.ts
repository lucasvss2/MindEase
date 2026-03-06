import { RefreshLoginResponse } from '@/domain/models'

export interface RefreshLogin {
  refresh(params: RefreshLogin.Params): Promise<RefreshLogin.Model>
}

export namespace RefreshLogin {
  export type Params = {
    refresh_token: string
    user_sso_id: string
  }

  export type Model = RefreshLoginResponse
}
