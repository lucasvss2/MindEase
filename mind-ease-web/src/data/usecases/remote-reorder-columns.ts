import { ReorderColumns } from '@/domain'

export class RemoteReorderColumns implements ReorderColumns {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async reorder(_boardId: string, _params: ReorderColumns.Params): Promise<void> {
    return
  }
}
