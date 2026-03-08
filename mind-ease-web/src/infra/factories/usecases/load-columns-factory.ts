import { RemoteLoadColumns } from '@/data/usecases'
import { LoadColumns } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteLoadColumns = (): LoadColumns => new RemoteLoadColumns(new AxiosHttpClient())
