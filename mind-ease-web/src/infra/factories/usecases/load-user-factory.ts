import { RemoteLoadUser } from '@/data/usecases'
import { LoadUser } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteLoadUser = (): LoadUser => {
  return new RemoteLoadUser(new AxiosHttpClient())
}
