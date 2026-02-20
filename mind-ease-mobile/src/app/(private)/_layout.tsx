import "@/app/styles/global.css";
import { queryClient } from "@/infrastructure/query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import ToastManager from "toastify-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "@/presentation/hooks/useFonts";
import { SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

if (__DEV__) {
  require("../../../ReactotronConfig");
}

export default function PrivateLayout() {
  useFonts();

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
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="details" />
          <Stack.Screen name="create-task" />
          <Stack.Screen name="focus" />
        </Stack>
        <ToastManager />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
