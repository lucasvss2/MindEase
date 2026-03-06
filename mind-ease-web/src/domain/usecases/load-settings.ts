import { Settings } from '@/domain/models'

export interface LoadSettings {
  load(): Promise<LoadSettings.Model>
}

export namespace LoadSettings {
  export type Model = Settings
}
