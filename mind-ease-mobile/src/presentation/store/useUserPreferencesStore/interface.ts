import {
  ActivityProfile,
  Contrast,
  FontType,
} from "@/domain/types/settings";

export interface States {
  fontSizeScale: number;
  spacingScale: number;
  contrast: Contrast;
  activityProfile: ActivityProfile;
  enableSummaryMode: boolean;
  animationSpeed: number;
  fontType: FontType;
}

export interface Actions {
  updateEnableSummaryMode: (enable: boolean) => void;
  updateContrast: (contrast: Contrast) => void;
  updateActivityProfile: (profile: ActivityProfile) => void;
  updateFontSizeScale: (value: number) => void;
  updateSpacingScale: (value: number) => void;
  resetPreferences: () => void;
  updateAnimationSpeed: (value: number) => void;
  updateFontType: (fontType: FontType) => void;
  updateAllPreferences: (preferences: States) => void;
}

