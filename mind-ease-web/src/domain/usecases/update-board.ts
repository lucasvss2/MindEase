import { Board } from '@/domain'

export interface UpdateBoard {
  update(id: string, params: UpdateBoard.Params): Promise<UpdateBoard.Model>
}

export namespace UpdateBoard {
  export type Params = {
    name?: string
    description?: string | null
    color?: string
  }

  export type Model = Board
}
