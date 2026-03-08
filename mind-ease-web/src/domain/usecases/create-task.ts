import { Task } from '@/domain/models'

export interface CreateTask {
  create(params: CreateTask.Params): Promise<CreateTask.Model>
}

export namespace CreateTask {
  export type ChecklistItemInput = {
    id: string
    text: string
    isConcluded?: boolean
  }

  export type Params = {
    boardId: string
    columnId: string
    title: string
    description?: string | null
    checklist?: ChecklistItemInput[]
    enableSoundAlerts?: boolean
    isConcluded?: boolean
    status?: 'TODO' | 'IN_PROGRESS' | 'DONE'
    dueDate?: string | null
    hours?: number
    focusMinutes?: number
    shortBreakMinutes?: number
    longBreakMinutes?: number
    longBreakEvery?: number
  }

  export type Model = Task
}
