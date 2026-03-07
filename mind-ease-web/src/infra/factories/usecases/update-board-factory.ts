import { RemoteUpdateBoard } from '@/data/usecases'
import { UpdateBoard } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteUpdateBoard = (): UpdateBoard => new RemoteUpdateBoard(new AxiosHttpClient())
