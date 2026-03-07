import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadBoards } from '@/infra/factories'

export const useBoards = () => {
  const loadBoards = makeRemoteLoadBoards()
  return useQuery({
    queryKey: ['boards'],
    queryFn: () => loadBoards.load(),
    staleTime: 1000 * 60 * 5,
  })
}
