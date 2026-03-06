import { useNavigate } from 'react-router-dom'

import { useMutation } from '@tanstack/react-query'
import { makeRemoteRefreshLogin } from '@/main/factories'
import authStore from '@/main/config/stores/auth-store'
import { showToast } from '@/presentation'

type RefreshLoginMutation = {
  refresh_token: string
  user_sso_id: string
  redirectPage: string | null
}

export const useRefreshLoginToken = () => {
  const navigate = useNavigate()

  const refreshLogin = makeRemoteRefreshLogin()

  return useMutation({
    mutationFn: async ({ refresh_token, user_sso_id }: RefreshLoginMutation) => {
      return refreshLogin.refresh({
        refresh_token: refresh_token,
        user_sso_id: user_sso_id,
      })
    },
    onSuccess: (data, { redirectPage }) => {
      // Atualizar auth stores
      authStore.setState(
        {
          access_token: data.access_token,
          refresh_token: data.refresh_token,
          id_token: data.id_token,
          isUserAuthenticated: true,
          expires_in: data.expires_in,
        },
        false,
        'sign-in',
      )


      showToast({
        type: 'success',
        message: 'Usuário validado com sucesso!',
        description: 'Usuário validado com sucesso!',
      })

      if (redirectPage) {
        return navigate(`/${redirectPage}`)
      } else {
        navigate(`/home`)
      }
    },
    onError: (err) => {
      console.error('Error refreshing login token', err)

      showToast({
        type: 'error',
        message: 'Erro ao validar usuário. Por favor, faça login novamente.',
        description: 'Erro ao validar usuário. Por favor, faça login novamente.',
      })

      //clearAllCaches()
      window.location.href = 'https://www.hml.acer-loginunico.com/'
    },
  })
}
