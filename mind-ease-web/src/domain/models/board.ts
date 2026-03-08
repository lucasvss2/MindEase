export type Board = {
  id: string
  userId: string
  name: string
  description?: string | null
  color: string
  tasksCount: number
  totalHours: number
  createdAt: string
  updatedAt: string
}
