import "@/app/styles/global.css";
import { queryClient } from "@/infrastructure/query";
import { useFonts } from "@/presentation/hooks/useFonts";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { getUserPreferences } from "@/utils/helpers/userPreferencesSecureStorage";
import { QueryClientProvider } from "@tanstack/react-query";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ToastManager from "toastify-react-native";

SplashScreen.preventAutoHideAsync();

if (__DEV__) {
  require("../../../ReactotronConfig");
}

export default function PrivateLayout() {
  useFonts();

  const { updateAllPreferences } = useUserPreferencesStore();

  useEffect(() => {
    const loadData = async () => {
      const savedPrefs = await getUserPreferences();
      updateAllPreferences(savedPrefs);
    };

    loadData();
  }, [updateAllPreferences]);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView
        style={{ flex: 1 }}
        edges={["top", "left", "right", "bottom"]}
      >
        <Stack
          screenOptions={{
            headerShown: false,
            animation: "default",
            contentStyle: { backgroundColor: "transparent" },
          }}
        >
          <Stack.Screen name='index' />
          <Stack.Screen name='(tabs)' />
          <Stack.Screen name='details' />
          <Stack.Screen name='create-task' />
          <Stack.Screen name='focus' />
          <Stack.Screen name='task-details' />
        </Stack>
        <ToastManager />
      </SafeAreaView>
    </QueryClientProvider>
  );
}

