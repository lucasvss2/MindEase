import { Column } from '@/domain/models'

export interface LoadColumns {
  load(boardId: string): Promise<LoadColumns.Model>
}

export namespace LoadColumns {
  export type Model = Column[]
}
