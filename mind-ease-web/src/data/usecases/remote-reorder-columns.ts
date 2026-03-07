import { ReorderColumns } from '@/domain/usecases'

export class RemoteReorderColumns implements ReorderColumns {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async reorder(_boardId: string, _params: ReorderColumns.Params): Promise<void> {
    // Endpoint de reorder não disponível na API
    return
  }
}
