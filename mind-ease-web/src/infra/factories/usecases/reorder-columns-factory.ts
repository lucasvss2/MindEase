import { RemoteReorderColumns } from '@/data/usecases'
import { ReorderColumns } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteReorderColumns = (): ReorderColumns =>
  new RemoteReorderColumns(new AxiosHttpClient())
