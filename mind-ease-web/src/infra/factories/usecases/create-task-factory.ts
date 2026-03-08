import { RemoteCreateTask } from '@/data/usecases'
import { CreateTask } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteCreateTask = (): CreateTask => new RemoteCreateTask(new AxiosHttpClient())
