import { INITIAL_STATE_USER_PREFERENCES } from "@/presentation/constants/initialUserPreferences";
import { create } from "zustand";
import { Actions, States } from "./interface";

const useUserPreferencesStore = create<States & Actions>((set, get) => ({
  ...INITIAL_STATE_USER_PREFERENCES,

  updateActivityProfile: (profile) => set({ activeProfileId: profile }),

  updateEnableSummaryMode: (enable) => {
    const { activeProfileId } = get();
    set((state) => ({
      [activeProfileId]: {
        ...state[activeProfileId],
        enableSummaryMode: enable,
      },
    }));
  },

  updateContrast: (contrast) => {
    const { activeProfileId } = get();
    set((state) => ({
      [activeProfileId]: { ...state[activeProfileId], contrast },
    }));
  },

  updateFontSizeScale: (value) => {
    const { activeProfileId } = get();
    set((state) => ({
      [activeProfileId]: { ...state[activeProfileId], fontSizeScale: value },
    }));
  },

  updateSpacingScale: (value) => {
    const { activeProfileId } = get();
    set((state) => ({
      [activeProfileId]: { ...state[activeProfileId], spacingScale: value },
    }));
  },

  updateAnimationSpeed: (value) => {
    const { activeProfileId } = get();
    set((state) => ({
      [activeProfileId]: { ...state[activeProfileId], animationSpeed: value },
    }));
  },

  updateFontType: (fontType) => {
    const { activeProfileId } = get();
    set((state) => ({
      [activeProfileId]: { ...state[activeProfileId], fontType },
    }));
  },

  updateAllPreferences: (preferences) => set({ ...preferences }),

  getAllPreferences: () => {
    const { activeProfileId, study, work } = get();
    return { activeProfileId, study, work };
  },

  //ajustar para ser por perfil
  resetPreferences: () => set(INITIAL_STATE_USER_PREFERENCES),
}));

export default useUserPreferencesStore;

