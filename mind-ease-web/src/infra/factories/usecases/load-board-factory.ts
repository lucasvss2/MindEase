import { RemoteLoadBoard } from '@/data/usecases'
import { LoadBoard } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteLoadBoard = (): LoadBoard => new RemoteLoadBoard(new AxiosHttpClient())
