import { RefreshLoginResponse } from '@/domain'
import authStore from '@/main/config/stores/auth-store'
import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
})

api.interceptors.request.use((config) => {
  const token = authStore.getState().accessToken
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

      const refreshToken = authStore.getState().refreshToken

      const originalConfig = error.config
      if (!isRefreshing) {
        isRefreshing = true

        api
          .post('/auth/refresh', {
            refreshToken,
          })
          .then(({ data }) => {
            const { accessToken } = data as RefreshLoginResponse

            authStore.setState({
              accessToken: accessToken,
              isUserAuthenticated: true,
            })

            failedRequestsQueue.forEach((req) => req.onSuccess(accessToken))
            failedRequestsQueue = []
          })
          .catch((err) => {
            failedRequestsQueue.forEach((req) => req.onFailure(err))
            failedRequestsQueue = []
            authStore.getState().signOut()
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
