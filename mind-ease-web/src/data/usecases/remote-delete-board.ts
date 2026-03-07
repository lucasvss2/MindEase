import { DeleteBoard } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteDeleteBoard implements DeleteBoard {
  constructor(private readonly httpClient: HttpClient<void>) {}

  async delete(id: string): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `/boards/${id}`,
      method: 'delete',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.noContent:
        return
      case HttpStatusCode.notFound:
        throw new Error('Not Found')
      case HttpStatusCode.unauthorized:
        throw new Error('Unauthorized')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
