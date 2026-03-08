import { RemoteUpdateColumn } from '@/data/usecases'
import { UpdateColumn } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteUpdateColumn = (): UpdateColumn =>
  new RemoteUpdateColumn(new AxiosHttpClient())
