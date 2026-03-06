import { SaveSettings } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteSaveSettings implements SaveSettings {
  constructor(private readonly httpClient: HttpClient<SaveSettings.Model>) { }

  async save(params: SaveSettings.Params): Promise<SaveSettings.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/pomodoro/settings',
      method: 'put',
      body: params,
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
