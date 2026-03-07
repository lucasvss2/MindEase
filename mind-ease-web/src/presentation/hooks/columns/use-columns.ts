import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadColumns } from '@/infra/factories'

export const useColumns = (boardId: string) => {
  const loadColumns = makeRemoteLoadColumns()
  return useQuery({
    queryKey: ['columns', boardId],
    queryFn: () => loadColumns.load(boardId),
    staleTime: 1000 * 60 * 5,
    enabled: !!boardId,
  })
}
