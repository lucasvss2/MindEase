import { IUserPreferences } from "@/domain/types";
import { INITIAL_STATE_USER_PREFERENCES, USER_INITIAL_PREFERENCES } from "@/presentation/constants/initialUserPreferences";
import * as SecureStore from "expo-secure-store";

const PREFERENCES_KEY = "user_preferences";
type TActivityProfile = "study" | "work";

export interface IUserPreferencesStoraged {
  activeProfileId: TActivityProfile;
  study: Partial<IUserPreferences>;
  work: Partial<IUserPreferences>;
}

export const getUserPreferences = async (): Promise<IUserPreferencesStoraged> => {
  try {
    const jsonValue = await SecureStore.getItemAsync(PREFERENCES_KEY);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as IUserPreferencesStoraged;
    }

    return INITIAL_STATE_USER_PREFERENCES;
  } catch (error) {
    console.error("Erro ao recuperar preferências do SecureStore:", error);

    return INITIAL_STATE_USER_PREFERENCES;
  }
};

export const saveUserPreferences = async (
  updates: IUserPreferencesStoraged,
  Toast: any,
): Promise<void> => {
  try {
    const existingData = await SecureStore.getItemAsync(PREFERENCES_KEY);

    const currentPreferences = existingData
      ? JSON.parse(existingData)
      : USER_INITIAL_PREFERENCES;

    const updatedPreferences = {
      ...currentPreferences,
      ...updates,
    };

    await SecureStore.setItemAsync(
      PREFERENCES_KEY,
      JSON.stringify(updatedPreferences),
    );
    Toast.success("Preferências salvas com sucesso!");
  } catch (error) {
    Toast.error("Não foi possível salvar suas preferências.", error);
  }
};

