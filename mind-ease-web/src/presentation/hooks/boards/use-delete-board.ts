import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteDeleteBoard } from '@/infra/factories'
import { showToast } from '@/presentation/utils'

export const useDeleteBoard = () => {
  const queryClient = useQueryClient()
  const deleteBoard = makeRemoteDeleteBoard()

  return useMutation({
    mutationFn: (id: string) => deleteBoard.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] })
      showToast({ type: 'success', message: 'Board excluído com sucesso!' })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao excluir board', description: err?.message })
    },
  })
}
