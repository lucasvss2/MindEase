import { AddAccount } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteAddAccount implements AddAccount {
  constructor(private readonly httpClient: HttpClient<AddAccount.Model>) { }

  async add(params: AddAccount.Params): Promise<AddAccount.Model> {
    const httpResponse = await this.httpClient.request({
      url: '/auth/register',
      method: 'post',
      body: params,
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.created:
        return httpResponse.body!
      case HttpStatusCode.badRequest:
        throw new Error((httpResponse.body as any)?.error || 'Dados inválidos')
      default:
        throw new Error('Unexpected Error')
    }
  }
}
