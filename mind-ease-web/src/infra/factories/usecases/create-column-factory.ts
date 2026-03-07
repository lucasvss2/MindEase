import { RemoteCreateColumn } from '@/data/usecases'
import { CreateColumn } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteCreateColumn = (): CreateColumn =>
  new RemoteCreateColumn(new AxiosHttpClient())
