import { Board } from '@/domain/models'

export interface CreateBoard {
  create(params: CreateBoard.Params): Promise<CreateBoard.Model>
}

export namespace CreateBoard {
  export type Params = {
    name: string
    description?: string | null
    color?: string
  }

  export type Model = Board
}
