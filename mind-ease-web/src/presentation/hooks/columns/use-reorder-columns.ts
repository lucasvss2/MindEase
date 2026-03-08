import { useMutation } from '@tanstack/react-query'
import { makeRemoteReorderColumns } from '@/infra/factories'
import { ReorderColumns } from '@/domain/usecases'

export const useReorderColumns = (boardId: string) => {
  const reorderColumns = makeRemoteReorderColumns()

  return useMutation({
    mutationFn: (params: ReorderColumns.Params) => reorderColumns.reorder(boardId, params),
  })
}
