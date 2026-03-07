export interface DeleteBoard {
  delete(id: string): Promise<void>
}
