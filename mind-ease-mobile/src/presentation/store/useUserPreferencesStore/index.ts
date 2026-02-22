import { USER_INITIAL_PREFERENCES } from "@/presentation/constants/initialUserPreferences";
import { create } from "zustand";
import { Actions, States } from "./interface";

const useUserPreferencesStore = create<States & Actions>((set) => ({
  ...USER_INITIAL_PREFERENCES,

  updateEnableSummaryMode: (enableSummaryMode) => set({ enableSummaryMode }),
  updateContrast: (contrast) => set({ contrast }),
  updateActivityProfile: (activityProfile) => set({ activityProfile }),
  updateComplexityLevel: (complexityLevel) => set({ complexityLevel }),
  updateFontSizeScale: (value) => set(() => ({ fontSizeScale: value })),
  updateSpacingScale: (value) => set(() => ({ spacingScale: value })),
  updateAnimationSpeed: (value) => set(() => ({ animationSpeed: value })),
  updateFontType: (fontType) => set(() => ({ fontType })),
  updateAllPreferences: (preferences) => set(() => ({ ...preferences })),
  resetPreferences: () => set({ ...USER_INITIAL_PREFERENCES }),
}));

export default useUserPreferencesStore;

