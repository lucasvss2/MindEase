import "@/app/styles/global.css";
import { queryClient } from "@/infrastructure/query";
import { useFonts } from "@/presentation/hooks/useFonts";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import {
  getUserPreferences,
  IUserPreferencesStoraged,
} from "@/utils/helpers/userPreferencesSecureStorage";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect } from "react";
import ToastManager from "toastify-react-native";
if (__DEV__) {
  require("../../../ReactotronConfig");
}

export default function RootLayout() {
  useFonts();

  const { updateAllPreferences } = useUserPreferencesStore();

  useEffect(() => {
    const loadData = async () => {
      const savedPrefs =
        (await getUserPreferences()) as IUserPreferencesStoraged;
      if (!savedPrefs) return;

      updateAllPreferences(savedPrefs);
    };

    loadData();
  }, [updateAllPreferences]);

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        initialRouteName='login'
        screenOptions={{
          headerBackButtonMenuEnabled: true,
          headerBackTitle: "Voltar",
        }}
      >
        <Stack.Screen
          name='login'
          options={{
            title: "Acessar conta",
          }}
        />

        <Stack.Screen
          name='create-account'
          options={{
            title: "Criar conta",
          }}
        />
      </Stack>
      <ToastManager />
    </QueryClientProvider>
  );
}

