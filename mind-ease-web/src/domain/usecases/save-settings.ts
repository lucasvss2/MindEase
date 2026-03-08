import { Settings } from '@/domain/models'

export interface SaveSettings {
  save(params: SaveSettings.Params): Promise<SaveSettings.Model>
}

export namespace SaveSettings {
  export type Params = {
    focusMinutes?: number
    shortBreakMinutes?: number
    longBreakMinutes?: number
    longBreakEvery?: number
  }

  export type Model = Settings
}
