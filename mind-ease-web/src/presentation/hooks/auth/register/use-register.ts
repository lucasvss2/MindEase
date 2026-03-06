import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { makeRemoteAddAccount } from '@/main/factories'
import authStore from '@/main/config/stores/auth-store'
import { showToast } from '@/presentation'
import { AddAccount } from '@/domain/usecases'

export const useRegister = () => {
  const navigate = useNavigate()
  const addAccount = makeRemoteAddAccount()

  return useMutation({
    mutationFn: async (params: AddAccount.Params) => {
      return addAccount.add(params)
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
        'sign-up',
      )

      showToast({
        type: 'success',
        message: 'Conta criada!',
        description: 'Sua conta foi criada com sucesso.',
      })

      navigate('/board')
    },
    onError: (err: any) => {
      console.error('Error registering', err)

      const errorMessage =
        err?.response?.data?.error || 'Erro ao criar conta. Tente novamente.'

      showToast({
        type: 'error',
        message: 'Erro no cadastro',
        description: errorMessage,
      })
    },
  })
}
