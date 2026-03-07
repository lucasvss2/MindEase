import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteReorderColumns } from '@/infra/factories'
import { ReorderColumns } from '@/domain/usecases'

export const useReorderColumns = (boardId: string) => {
  const queryClient = useQueryClient()
  const reorderColumns = makeRemoteReorderColumns()

  return useMutation({
    mutationFn: (params: ReorderColumns.Params) => reorderColumns.reorder(boardId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['columns', boardId] })
    },
  })
}
