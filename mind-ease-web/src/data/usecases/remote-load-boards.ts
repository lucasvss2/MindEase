import { LoadBoards } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteLoadBoards implements LoadBoards {
  constructor(private readonly httpClient: HttpClient<LoadBoards.Model>) {}

  async load(): Promise<LoadBoards.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/boards',
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
