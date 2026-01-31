export type Contrast = "soft" | "standard" | "high";
export type ActivityProfile = "work" | "study";
export type ComplexityLevel = "low" | "medium" | "high";
export type FontType = "sans" | "serif" | "mono";

export interface IUserPreferences {
  fontSizeScale: number;
  spacingScale: number;
  contrast: Contrast;
  activityProfile: ActivityProfile;
  enableSummaryMode: boolean;
  complexityLevel: ComplexityLevel;
  animationSpeed: number;
  fontType: FontType;
}

