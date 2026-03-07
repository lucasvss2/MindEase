import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { makeRemoteAuthentication } from '@/main/factories'
import authStore from '@/presentation/stores/auth-store'
import { showToast } from '@/presentation'
import { Authentication } from '@/domain/usecases'

export const useLogin = () => {
  const navigate = useNavigate()
  const authentication = makeRemoteAuthentication()

  return useMutation({
    mutationFn: async (params: Authentication.Params) => {
      return authentication.auth(params)
    },
    onSuccess: (data) => {
      authStore.setState(
        {
          user: data.user,
          accessToken: data.accessToken,
          refreshToken: data.refreshToken,
          isUserAuthenticated: true,
        },
        false,
        'sign-in',
      )

      showToast({
        type: 'success',
        message: 'Bem-vindo(a)!',
        description: 'Login realizado com sucesso.',
      })

      navigate('/board')
    },
    onError: (err: any) => {
      console.error('Error logging in', err)
      const errorMessage =
        err?.response?.data?.error || 'Erro ao realizar login. Verifique suas credenciais.'

      showToast({
        type: 'error',
        message: 'Erro no login',
        description: errorMessage,
      })
    },
  })
}
