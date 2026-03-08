import { useMutation } from '@tanstack/react-query'
import { makeRemoteReorderTasks } from '@/infra/factories'
import { ReorderTasks } from '@/domain/usecases'

export const useReorderTasks = (columnId: string) => {
  const reorderTasks = makeRemoteReorderTasks()

  return useMutation({
    mutationFn: (params: ReorderTasks.Params) => reorderTasks.reorder(columnId, params),
    onSuccess: () => {
      // Opcional: invalidar as tasks dessa coluna para garantir sync com o servidor,
      // embora a atualização otimista (UI) já possa ter rodado.
      // queryClient.invalidateQueries({ queryKey: ['tasks', columnId] })
    },
  })
}
