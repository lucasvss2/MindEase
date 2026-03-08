import { Authentication } from '@/domain'
import { HttpClient, HttpStatusCode } from '@/data'

export class RemoteAuthentication implements Authentication {
  constructor(private readonly httpClient: HttpClient<Authentication.Model>) {}

  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/auth/login',
      method: 'post',
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body!
      case HttpStatusCode.unauthorized:
        throw new Error('Credenciais inválidas')
      case HttpStatusCode.badRequest:
        throw new Error((httpResponse.body as any)?.error || 'Dados inválidos')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
