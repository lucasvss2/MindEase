export type ChecklistItem = {
  id: string
  text: string
  isConcluded: boolean
}

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE'

export type Task = {
  id: string
  userId: string
  boardId: string
  columnId: string
  title: string
  description?: string | null
  checklist: ChecklistItem[]
  status: TaskStatus
  enableSoundAlerts: boolean
  isConcluded: boolean
  dueDate?: string | null
  hours: number
  createdAt: string
  updatedAt: string
}
