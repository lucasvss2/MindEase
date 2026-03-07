import { RemoteRefreshLogin } from '@/data/usecases'
import { RefreshLogin } from '@/domain/usecases'
import { makeAxiosHttpClient } from '@/infra/factories/http/axios-http-client-factory'

export const makeRemoteRefreshLogin = (): RefreshLogin => {
  return new RemoteRefreshLogin('/auth/login', makeAxiosHttpClient())
}
