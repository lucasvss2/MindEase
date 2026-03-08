import { CreateTask } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteCreateTask implements CreateTask {
  constructor(private readonly httpClient: HttpClient<CreateTask.Model>) {}

  async create(params: CreateTask.Params): Promise<CreateTask.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/tasks',
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
