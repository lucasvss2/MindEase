import { LoadColumns } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteLoadColumns implements LoadColumns {
  constructor(private readonly httpClient: HttpClient<LoadColumns.Model>) {}

  async load(boardId: string): Promise<LoadColumns.Model> {
    const httpResponse = await this.httpClient.request({
      url: `/columns/board/${boardId}`,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.unauthorized:
        throw new Error('Unauthorized')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
