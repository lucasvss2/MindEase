import { RemoteSaveSettings } from '@/data/usecases'
import { SaveSettings } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteSaveSettings = (): SaveSettings => {
  return new RemoteSaveSettings(new AxiosHttpClient())
}
