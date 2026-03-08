import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import { makeRemoteRefreshLogin } from '@/infra/factories'
import authStore from '@/presentation/stores/auth-store'
import { showToast } from '@/presentation'

type RefreshLoginMutation = {
  refreshToken: string
  redirectPage: string | null
}

export const useRefreshLoginToken = () => {
  const navigate = useNavigate()

  const refreshLogin = makeRemoteRefreshLogin()

  return useMutation({
    mutationFn: async ({ refreshToken }: RefreshLoginMutation) => {
      return refreshLogin.refresh({
        refreshToken,
      })
    },
    onSuccess: (data, { redirectPage }) => {
      authStore.setState(
        {
          accessToken: data.accessToken,
          isUserAuthenticated: true,
        },
        false,
        'sign-in',
      )

      showToast({
        type: 'success',
        message: 'Sessão renovada com sucesso!',
        description: 'Sessão renovada com sucesso!',
      })

      if (redirectPage) {
        return navigate(`/${redirectPage}`)
      } else {
        navigate(`/boards`)
      }
    },
    onError: (err) => {
      console.error('Error refreshing login token', err)

      showToast({
        type: 'error',
        message: 'Sessão expirada. Por favor, faça login novamente.',
        description: 'Sessão expirada. Por favor, faça login novamente.',
      })

      authStore.getState().signOut()
      navigate('/login')
    },
  })
}
