import { create } from 'zustand';
import { Actions, States } from './interface';

const useUserPreferencesStore = create<States&Actions>((set) => ({
    fontSizeScale: 0,
    spacingScale: 0,
    increaseFontSizeScale: () => set(({fontSizeScale}) => ({ fontSizeScale: fontSizeScale + 1 })),
    decreaseFontSizeScale: () => set(({fontSizeScale}) => ({ fontSizeScale: fontSizeScale - 1 })),
    increaseSpacingScale: () => set(({spacingScale}) => ({ spacingScale: spacingScale + 1 })),
    decreaseSpacingScale: () => set(({spacingScale}) => ({ spacingScale: spacingScale - 1 })),
}));

export default useUserPreferencesStore;