export interface ReorderTasks {
  reorder(columnId: string, params: ReorderTasks.Params): Promise<void>
}

export namespace ReorderTasks {
  export type Params = {
    taskIds: string[]
  }
}
