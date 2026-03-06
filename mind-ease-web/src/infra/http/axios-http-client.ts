import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import { api } from '@/infra/http/axios-instance'

export class AxiosHttpClient implements HttpClient {
  async request(data: HttpRequest): Promise<HttpResponse> {
    try {
      const axiosResponse = await api.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers
      })
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    } catch (error: any) {
      if (error && error.response) {
        return {
          statusCode: error.response.status,
          body: error.response.data
        }
      }
      return {
        statusCode: 500,
        body: error.message
      }
    }
  }
}
