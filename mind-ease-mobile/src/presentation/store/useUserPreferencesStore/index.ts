import { create } from "zustand";
import { Actions, States } from "./interface";
import { IUserPreferences } from "@/domain/types/settings";

const initialPreferences: IUserPreferences = {
  fontSizeScale: 1,
  spacingScale: 1,
  contrast: "standard",
  activityProfile: "work",
  enableSummaryMode: false,
  complexityLevel: "high",
  animationSpeed: 1,
  fontType: "sans",
};

const useUserPreferencesStore = create<States & Actions>((set) => ({
  ...initialPreferences,

  updateEnableSummaryMode: (enableSummaryMode) => set({ enableSummaryMode }),
  updateContrast: (contrast) => set({ contrast }),
  updateActivityProfile: (activityProfile) => set({ activityProfile }),
  updateComplexityLevel: (complexityLevel) => set({ complexityLevel }),
  updateFontSizeScale: (value) => set(() => ({ fontSizeScale: value })),
  updateSpacingScale: (value) => set(() => ({ spacingScale: value })),
  updateAnimationSpeed: (value) => set(() => ({ animationSpeed: value })),
  updateFontType: (fontType) => set(() => ({ fontType })),
  resetPreferences: () => set({ ...initialPreferences }),
}));

export default useUserPreferencesStore;

