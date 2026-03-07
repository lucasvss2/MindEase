import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteCreateTask } from '@/infra/factories'
import { CreateTask } from '@/domain/usecases'
import { showToast } from '@/presentation/utils'

export const useCreateTask = (columnId: string) => {
  const queryClient = useQueryClient()
  const createTask = makeRemoteCreateTask()

  return useMutation({
    mutationFn: (params: CreateTask.Params) => createTask.create(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', columnId] })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao criar tarefa', description: err?.message })
    },
  })
}
