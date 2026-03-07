import { Board } from '@/domain/models'

export interface LoadBoards {
  load(): Promise<LoadBoards.Model>
}

export namespace LoadBoards {
  export type Model = Board[]
}
