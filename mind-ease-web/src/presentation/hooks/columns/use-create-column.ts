import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteCreateColumn } from '@/infra/factories'
import { showToast } from '@/presentation/utils'

export const useCreateColumn = (boardId: string) => {
  const queryClient = useQueryClient()
  const createColumn = makeRemoteCreateColumn()

  return useMutation({
    mutationFn: (params: { name: string }) => createColumn.create({ boardId, ...params }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['columns', boardId] })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao criar coluna', description: err?.message })
    },
  })
}
