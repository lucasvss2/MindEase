import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadSettings } from '@/infra/factories'

export const useSettings = () => {
  const loadSettings = makeRemoteLoadSettings()

  return useQuery({
    queryKey: ['settings'],
    queryFn: async () => {
      return loadSettings.load()
    },
    staleTime: 1000 * 60 * 15,
  })
}
