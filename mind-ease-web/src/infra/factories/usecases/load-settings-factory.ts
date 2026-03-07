import { RemoteLoadSettings } from '@/data/usecases'
import { LoadSettings } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteLoadSettings = (): LoadSettings => {
  return new RemoteLoadSettings(new AxiosHttpClient())
}
