import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { USER_INITIAL_PREFERENCES } from "@/presentation/constants/initialUserPreferences";

describe("UserPreferencesStore", () => {
  beforeEach(() => {
    useUserPreferencesStore.getState().resetPreferences();
  });

  it('deve iniciar com o perfil "work" ativo por padrão', () => {
    const state = useUserPreferencesStore.getState();
    expect(state.activeProfileId).toBe("work");
  });

  it("deve atualizar o contraste apenas no perfil ativo (work)", () => {
    const { updateContrast } = useUserPreferencesStore.getState();

    updateContrast("high");

    const updatedState = useUserPreferencesStore.getState();

    expect(updatedState.work.contrast).toBe("high");
    expect(updatedState.study.contrast).toBe(USER_INITIAL_PREFERENCES.contrast);
  });

  it("deve trocar o perfil ativo e manter as configurações independentes", () => {
    const { getState } = useUserPreferencesStore;

    const { updateActivityProfile, updateFontSizeScale } = getState();

    updateFontSizeScale(2.0);

    updateActivityProfile("study");
    updateFontSizeScale(1.5);

    const state = getState();
    expect(state.activeProfileId).toBe("study");
    expect(state.work.fontSizeScale).toBe(2.0);
    expect(state.study.fontSizeScale).toBe(1.5);
  });

  it("getAllPreferences deve retornar o objeto completo para persistência", () => {
    const state = useUserPreferencesStore.getState();
    const allPrefs = state.getAllPreferences();

    expect(allPrefs).toHaveProperty("activeProfileId");
    expect(allPrefs).toHaveProperty("study");
    expect(allPrefs).toHaveProperty("work");
  });
});

