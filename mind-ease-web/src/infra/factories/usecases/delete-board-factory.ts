import { RemoteDeleteBoard } from '@/data/usecases'
import { DeleteBoard } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteDeleteBoard = (): DeleteBoard => new RemoteDeleteBoard(new AxiosHttpClient())
