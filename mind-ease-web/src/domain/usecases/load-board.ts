import { Board } from '@/domain/models'

export interface LoadBoard {
  load(id: string): Promise<LoadBoard.Model>
}

export namespace LoadBoard {
  export type Model = Board
}
