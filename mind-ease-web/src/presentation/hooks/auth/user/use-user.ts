import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadUser } from '@/main/factories'
import authStore from '@/main/config/stores/auth-store'

export const useUser = () => {
  const loadUser = makeRemoteLoadUser()
  const isUserAuthenticated = authStore.getState().isUserAuthenticated

  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      return loadUser.load()
    },
    enabled: isUserAuthenticated,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}
