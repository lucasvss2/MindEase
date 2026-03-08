import { LoadSettings } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteLoadSettings implements LoadSettings {
  constructor(private readonly httpClient: HttpClient<LoadSettings.Model>) {}

  async load(): Promise<LoadSettings.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/pomodoro/settings',
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
