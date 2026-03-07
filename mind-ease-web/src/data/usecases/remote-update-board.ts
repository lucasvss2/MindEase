import { UpdateBoard } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteUpdateBoard implements UpdateBoard {
  constructor(private readonly httpClient: HttpClient<UpdateBoard.Model>) {}

  async update(id: string, params: UpdateBoard.Params): Promise<UpdateBoard.Model> {
    const httpResponse = await this.httpClient.request({
      url: `/boards/${id}`,
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
