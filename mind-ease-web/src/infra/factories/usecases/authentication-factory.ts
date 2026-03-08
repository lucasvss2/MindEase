import { RemoteAuthentication } from '@/data/usecases'
import { Authentication } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(new AxiosHttpClient())
}
