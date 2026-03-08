export interface ReorderColumns {
  reorder(boardId: string, params: ReorderColumns.Params): Promise<void>
}

export namespace ReorderColumns {
  export type Params = {
    columnIds: string[]
  }
}
