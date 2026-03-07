import { RemoteLoadTasks } from '@/data/usecases'
import { LoadTasks } from '@/domain/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteLoadTasks = (): LoadTasks => new RemoteLoadTasks(new AxiosHttpClient())
