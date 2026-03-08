import { CreateBoard } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteCreateBoard implements CreateBoard {
  constructor(private readonly httpClient: HttpClient<CreateBoard.Model>) {}

  async create(params: CreateBoard.Params): Promise<CreateBoard.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/boards',
      method: 'post',
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body!
      case HttpStatusCode.unauthorized:
        throw new Error('Unauthorized')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
