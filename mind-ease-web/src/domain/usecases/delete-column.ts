export interface DeleteColumn {
  delete(columnId: string): Promise<void>
}
