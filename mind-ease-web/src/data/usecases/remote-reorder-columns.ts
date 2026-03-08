import { ReorderColumns } from '@/domain'
import { HttpClient } from '@/data/protocols/http'

export class RemoteReorderColumns implements ReorderColumns {
  constructor(private readonly httpClient: HttpClient<unknown>) { }

  async reorder(boardId: string, params: ReorderColumns.Params): Promise<void> {
    await this.httpClient.request({
      url: `/columns/board/${boardId}/reorder`,
      method: 'patch',
      body: params, // { columnIds: [...] }
    })
  }
}
