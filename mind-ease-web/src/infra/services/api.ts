import { RefreshLoginResponse } from '@/domain'
import authStore from '@/main/config/stores/auth-store'
import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
})

api.interceptors.request.use((config) => {
  const token = authStore.getState().id_token
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

let isRefreshing = false
let failedRequestsQueue: any[] = []

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401 && error.message === 'Request failed with status code 401') {

      const refreshToken = authStore.getState().refresh_token

      const originalConfig = error.config
      if (!isRefreshing) {
        isRefreshing = true

        const userId = 'string'/* decodedIdToken['cognito:username'] */

        api
          .post('/auth/login', {
            refresh_token: refreshToken as string,
            user_sso_id: userId,
          })
          .then(({ data }) => {
            const { access_token, id_token, refresh_token } =
              data as RefreshLoginResponse
            authStore.setState({
              access_token: access_token,
              id_token: id_token,
              refresh_token: refresh_token,
              isUserAuthenticated: true,
            })



            /* rolesStore.getState().getUserRoles(id_token)
            rolesStore.setState({ userRoles: permissions }) */

            failedRequestsQueue.forEach((req) => req.onSuccess(id_token))
            failedRequestsQueue = []
          })
          .catch((err) => {
            failedRequestsQueue.forEach((req) => req.onFailure(err))
            failedRequestsQueue = []
            //clearAllCaches()
          })
          .finally(() => {
            isRefreshing = false
          })
      }

      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          onSuccess: (token: string) => {
            originalConfig!.headers!.Authorization = `Bearer ${token}`

            resolve(api(originalConfig!))
          },
          onFailure: (error: AxiosError) => reject(error),
        })
      })
    }

    return Promise.reject(error)
  },
)