import { ReorderTasks } from '@/domain/usecases'
import { RemoteReorderTasks } from '@/data/usecases'
import { AxiosHttpClient } from '@/infra/http'

export const makeRemoteReorderTasks = (): ReorderTasks =>
  new RemoteReorderTasks(new AxiosHttpClient())
