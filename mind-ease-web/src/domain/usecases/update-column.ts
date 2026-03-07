import { Column } from '@/domain/models'

export interface UpdateColumn {
  update(columnId: string, params: UpdateColumn.Params): Promise<UpdateColumn.Model>
}

export namespace UpdateColumn {
  export type Params = {
    name?: string
  }

  export type Model = Column
}
