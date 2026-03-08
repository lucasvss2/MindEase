import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteUpdateBoard } from '@/infra/factories'
import { UpdateBoard } from '@/domain/usecases'
import { showToast } from '@/presentation/utils'

export const useUpdateBoard = () => {
  const queryClient = useQueryClient()
  const updateBoard = makeRemoteUpdateBoard()

  return useMutation({
    mutationFn: ({ id, params }: { id: string; params: UpdateBoard.Params }) =>
      updateBoard.update(id, params),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ['boards'] })
      queryClient.invalidateQueries({ queryKey: ['board', id] })
      showToast({ type: 'success', message: 'Board atualizado com sucesso!' })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao atualizar board', description: err?.message })
    },
  })
}
