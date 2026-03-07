import { UpdateColumn } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteUpdateColumn implements UpdateColumn {
  constructor(private readonly httpClient: HttpClient<UpdateColumn.Model>) {}

  async update(columnId: string, params: UpdateColumn.Params): Promise<UpdateColumn.Model> {
    const httpResponse = await this.httpClient.request({
      url: `/columns/${columnId}`,
      method: 'put',
      body: params,
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
