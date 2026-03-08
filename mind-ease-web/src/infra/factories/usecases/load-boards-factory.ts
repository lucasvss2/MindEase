import { RemoteLoadBoards } from '@/data/usecases'
import { LoadBoards } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteLoadBoards = (): LoadBoards => new RemoteLoadBoards(new AxiosHttpClient())
