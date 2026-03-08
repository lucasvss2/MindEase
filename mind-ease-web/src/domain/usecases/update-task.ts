import { Task, ChecklistItem } from '@/domain/models'

export interface UpdateTask {
  update(taskId: string, params: UpdateTask.Params): Promise<UpdateTask.Model>
}

export namespace UpdateTask {
  export type Params = {
    boardId?: string
    columnId?: string
    title?: string
    description?: string | null
    checklist?: ChecklistItem[]
    enableSoundAlerts?: boolean
    isConcluded?: boolean
    status?: 'TODO' | 'IN_PROGRESS' | 'DONE'
    dueDate?: string | null
    hours?: number
  }

  export type Model = Task
}
