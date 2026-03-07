import { IUserPreferences } from "@/domain/types";
import { States } from "../store/useUserPreferencesStore/interface";

export const USER_INITIAL_PREFERENCES: IUserPreferences = {
  fontSizeScale: 1,
  spacingScale: 1,
  contrast: "moderate",
  activityProfile: "work",
  enableSummaryMode: false,
  animationSpeed: 1,
  fontType: "sans",
};


const { activityProfile, ...basePreferences } = USER_INITIAL_PREFERENCES;

export const INITIAL_STATE_USER_PREFERENCES: States = {
  activeProfileId: "work",
  study: { ...basePreferences },
  work: { ...basePreferences },
};
