import { DeleteColumn } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteDeleteColumn implements DeleteColumn {
  constructor(private readonly httpClient: HttpClient<void>) {}

  async delete(columnId: string): Promise<void> {
    const httpResponse = await this.httpClient.request({
      url: `/columns/${columnId}`,
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
