export type Contrast = "low" | "moderate" | "high";
export type ActivityProfile = "work" | "study";
export type FontType = "sans" | "serif" | "mono";

export interface IUserPreferences {
  fontSizeScale: number;
  spacingScale: number;
  contrast: Contrast;
  activityProfile: ActivityProfile;
  enableSummaryMode: boolean;
  animationSpeed: number;
  fontType: FontType;
}

