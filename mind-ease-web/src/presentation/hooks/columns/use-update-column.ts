import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteUpdateColumn } from '@/infra/factories'
import { UpdateColumn } from '@/domain/usecases'
import { showToast } from '@/presentation/utils'

export const useUpdateColumn = (boardId: string) => {
  const queryClient = useQueryClient()
  const updateColumn = makeRemoteUpdateColumn()

  return useMutation({
    mutationFn: ({ columnId, params }: { columnId: string; params: UpdateColumn.Params }) =>
      updateColumn.update(columnId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['columns', boardId] })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao atualizar coluna', description: err?.message })
    },
  })
}
