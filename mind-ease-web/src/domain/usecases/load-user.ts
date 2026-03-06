import { User } from '@/domain/models'

export interface LoadUser {
  load(): Promise<LoadUser.Model>
}

export namespace LoadUser {
  export type Model = User
}
