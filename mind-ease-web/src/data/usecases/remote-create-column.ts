import { CreateColumn } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteCreateColumn implements CreateColumn {
  constructor(private readonly httpClient: HttpClient<CreateColumn.Model>) {}

  async create(params: CreateColumn.Params): Promise<CreateColumn.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/columns',
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
