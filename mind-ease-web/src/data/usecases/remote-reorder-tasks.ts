import { ReorderTasks } from '@/domain'
import { HttpClient } from '@/data/protocols/http'

export class RemoteReorderTasks implements ReorderTasks {
  constructor(private readonly httpClient: HttpClient<unknown>) { }

  async reorder(columnId: string, params: ReorderTasks.Params): Promise<void> {
    await this.httpClient.request({
      url: `/tasks/column/${columnId}/reorder`,
      method: 'patch',
      body: params,
    })
  }
}
