import { LoadTasks } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteLoadTasks implements LoadTasks {
  constructor(private readonly httpClient: HttpClient<LoadTasks.Model>) {}

  async load(columnId: string): Promise<LoadTasks.Model> {
    const httpResponse = await this.httpClient.request({
      url: `/tasks/column/${columnId}`,
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
