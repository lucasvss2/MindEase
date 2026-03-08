import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadBoard } from '@/infra/factories'

export const useBoard = (id: string) => {
  const loadBoard = makeRemoteLoadBoard()
  return useQuery({
    queryKey: ['board', id],
    queryFn: () => loadBoard.load(id),
    staleTime: 1000 * 60 * 5,
    enabled: !!id,
  })
}
