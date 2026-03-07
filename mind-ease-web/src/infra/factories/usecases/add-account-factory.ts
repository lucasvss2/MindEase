import { RemoteAddAccount } from '@/data/usecases'
import { AddAccount } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteAddAccount = (): AddAccount => {
  return new RemoteAddAccount(new AxiosHttpClient())
}
