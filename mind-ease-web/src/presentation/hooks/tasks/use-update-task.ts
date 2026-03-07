import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteUpdateTask } from '@/infra/factories'
import { UpdateTask } from '@/domain/usecases'
import { showToast } from '@/presentation/utils'

export const useUpdateTask = (columnId: string) => {
  const queryClient = useQueryClient()
  const updateTask = makeRemoteUpdateTask()

  return useMutation({
    mutationFn: ({ taskId, params }: { taskId: string; params: UpdateTask.Params }) =>
      updateTask.update(taskId, params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', columnId] })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao atualizar tarefa', description: err?.message })
    },
  })
}
