import { RefreshLogin } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteRefreshLogin implements RefreshLogin {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteRefreshLogin.Model>,
  ) {}

  async refresh(params: RefreshLogin.Params): Promise<RefreshLogin.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.unauthorized:
        throw new Error('Unauthorized') // Na prática viriam de domain/errors/
      default:
        throw new Error('Unexpected error')
    }
  }
}

export namespace RemoteRefreshLogin {
  export type Model = RefreshLogin.Model
}
