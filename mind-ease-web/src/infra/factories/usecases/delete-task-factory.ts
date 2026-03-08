import { RemoteDeleteTask } from '@/data/usecases'
import { DeleteTask } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteDeleteTask = (): DeleteTask => new RemoteDeleteTask(new AxiosHttpClient())
