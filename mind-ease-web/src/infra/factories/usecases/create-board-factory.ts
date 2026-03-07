import { RemoteCreateBoard } from '@/data/usecases'
import { CreateBoard } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteCreateBoard = (): CreateBoard => new RemoteCreateBoard(new AxiosHttpClient())
