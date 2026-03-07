import { RemoteUpdateTask } from '@/data/usecases'
import { UpdateTask } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteUpdateTask = (): UpdateTask => new RemoteUpdateTask(new AxiosHttpClient())
