import { RefreshLoginResponse } from '@/domain/models'

export interface RefreshLogin {
  refresh(params: RefreshLogin.Params): Promise<RefreshLogin.Model>
}

export namespace RefreshLogin {
  export type Params = {
    refreshToken: string
  }

  export type Model = RefreshLoginResponse
}
