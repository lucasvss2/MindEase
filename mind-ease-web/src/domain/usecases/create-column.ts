import { Column } from '@/domain/models'

export interface CreateColumn {
  create(params: CreateColumn.Params): Promise<CreateColumn.Model>
}

export namespace CreateColumn {
  export type Params = {
    boardId: string
    name: string
  }

  export type Model = Column
}
