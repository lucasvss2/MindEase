import { ActivityProfile, Contrast, FontType } from "@/domain/types/settings";

// Representa as configurações de UM perfil
export interface IPreferences {
  fontSizeScale: number;
  spacingScale: number;
  contrast: Contrast;
  enableSummaryMode: boolean;
  animationSpeed: number;
  fontType: FontType;
}

// Representa a estrutura completa salva no Storage
export interface IUserPreferencesStoraged {
  activeProfileId: ActivityProfile; // "study" | "work"
  study: IPreferences;
  work: IPreferences;
}

export interface States extends IUserPreferencesStoraged {}

export interface Actions {
  updateEnableSummaryMode: (enable: boolean) => void;
  updateContrast: (contrast: Contrast) => void;
  updateActivityProfile: (profile: ActivityProfile) => void;
  updateFontSizeScale: (value: number) => void;
  updateSpacingScale: (value: number) => void;
  updateAnimationSpeed: (value: number) => void;
  updateFontType: (fontType: FontType) => void;
  resetPreferences: () => void;
  // Agora recebe e retorna o objeto mapeado por perfis
  updateAllPreferences: (preferences: IUserPreferencesStoraged) => void;
  getAllPreferences: () => IUserPreferencesStoraged;
}

