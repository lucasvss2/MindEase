import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteDeleteColumn } from '@/infra/factories'
import { showToast } from '@/presentation/utils'

export const useDeleteColumn = (boardId: string) => {
  const queryClient = useQueryClient()
  const deleteColumn = makeRemoteDeleteColumn()

  return useMutation({
    mutationFn: (columnId: string) => deleteColumn.delete(columnId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['columns', boardId] })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao excluir coluna', description: err?.message })
    },
  })
}
