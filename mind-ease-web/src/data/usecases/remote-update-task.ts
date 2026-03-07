import { UpdateTask } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteUpdateTask implements UpdateTask {
  constructor(private readonly httpClient: HttpClient<UpdateTask.Model>) {}

  async update(taskId: string, params: UpdateTask.Params): Promise<UpdateTask.Model> {
    const httpResponse = await this.httpClient.request({
      url: `/tasks/${taskId}`,
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
