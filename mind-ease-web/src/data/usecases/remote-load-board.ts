import { LoadBoard } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteLoadBoard implements LoadBoard {
  constructor(private readonly httpClient: HttpClient<LoadBoard.Model>) {}

  async load(id: string): Promise<LoadBoard.Model> {
    const httpResponse = await this.httpClient.request({
      url: `/boards/${id}`,
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.notFound:
        throw new Error('Not Found')
      case HttpStatusCode.unauthorized:
        throw new Error('Unauthorized')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
