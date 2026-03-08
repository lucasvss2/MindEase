import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteCreateBoard } from '@/infra/factories'
import { CreateBoard } from '@/domain/usecases'
import { showToast } from '@/presentation/utils'

export const useCreateBoard = () => {
  const queryClient = useQueryClient()
  const createBoard = makeRemoteCreateBoard()

  return useMutation({
    mutationFn: (params: CreateBoard.Params) => createBoard.create(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['boards'] })
      showToast({ type: 'success', message: 'Board criado com sucesso!' })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao criar board', description: err?.message })
    },
  })
}
