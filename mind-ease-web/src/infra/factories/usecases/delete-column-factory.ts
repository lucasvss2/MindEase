import { RemoteDeleteColumn } from '@/data/usecases'
import { DeleteColumn } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteDeleteColumn = (): DeleteColumn =>
  new RemoteDeleteColumn(new AxiosHttpClient())
