import { useQuery } from '@tanstack/react-query'
import { makeRemoteLoadTasks } from '@/infra/factories'

export const useTasks = (columnId: string) => {
  const loadTasks = makeRemoteLoadTasks()

  return useQuery({
    queryKey: ['tasks', columnId],
    queryFn: () => loadTasks.load(columnId),
    enabled: !!columnId,
  })
}
