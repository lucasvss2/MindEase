import { IUserPreferences } from "@/domain/types";
import { USER_INITIAL_PREFERENCES } from "@/presentation/constants/initialUserPreferences";
import * as SecureStore from "expo-secure-store";

const PREFERENCES_KEY = "user_preferences";

export const getUserPreferences = async (): Promise<IUserPreferences> => {
  try {
    const jsonValue = await SecureStore.getItemAsync(PREFERENCES_KEY);

    if (jsonValue !== null) {
      return JSON.parse(jsonValue) as IUserPreferences;
    }

    return USER_INITIAL_PREFERENCES;
  } catch (error) {
    console.error("Erro ao recuperar preferências do SecureStore:", error);

    return USER_INITIAL_PREFERENCES;
  }
};

export const saveUserPreferences = async (
  updates: Partial<IUserPreferences>,
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

