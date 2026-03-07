import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadUser } from '@/infra/factories'
import authStore from '@/presentation/stores/auth-store'

export const useUser = () => {
  const loadUser = makeRemoteLoadUser()
  const isUserAuthenticated = authStore.getState().isUserAuthenticated

  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      return loadUser.load()
    },
    enabled: isUserAuthenticated,
    staleTime: 1000 * 60 * 5,
  })
}
