import { ReorderColumns } from '@/domain'
import { HttpClient } from '@/data/protocols/http'

export class RemoteReorderColumns implements ReorderColumns {
  constructor(private readonly httpClient: HttpClient<unknown>) {}

  async reorder(_boardId: string, params: ReorderColumns.Params): Promise<void> {
    await Promise.all(
      params.map(({ id, position }) =>
        this.httpClient.request({
          url: `/columns/${id}`,
          method: 'put',
          body: { position },
        }),
      ),
    )
  }
}
