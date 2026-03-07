import { Task } from '@/domain/models'

export interface LoadTasks {
  load(columnId: string): Promise<LoadTasks.Model>
}

export namespace LoadTasks {
  export type Model = Task[]
}
