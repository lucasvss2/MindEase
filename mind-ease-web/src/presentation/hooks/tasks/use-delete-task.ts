import { useMutation, useQueryClient } from '@tanstack/react-query'
import { makeRemoteDeleteTask } from '@/infra/factories'
import { showToast } from '@/presentation/utils'

export const useDeleteTask = (columnId: string) => {
  const queryClient = useQueryClient()
  const deleteTask = makeRemoteDeleteTask()

  return useMutation({
    mutationFn: (taskId: string) => deleteTask.delete(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks', columnId] })
    },
    onError: (err: any) => {
      showToast({ type: 'error', message: 'Erro ao excluir tarefa', description: err?.message })
    },
  })
}
