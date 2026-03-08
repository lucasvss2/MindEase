import { LoadUser } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteLoadUser implements LoadUser {
  constructor(private readonly httpClient: HttpClient<LoadUser.Model>) {}

  async load(): Promise<LoadUser.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/me',
      method: 'get',
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.unauthorized:
        throw new Error('Unauthorized')
      case HttpStatusCode.notFound:
        throw new Error('User not found')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
