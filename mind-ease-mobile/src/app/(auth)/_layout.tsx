import "@/app/styles/global.css";
import { queryClient } from "@/infrastructure/query";
import { useFonts } from "@/presentation/hooks/useFonts";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import ToastManager from "toastify-react-native";
if (__DEV__) {
  require("../../../ReactotronConfig");
}

export default function RootLayout() {
  useFonts();

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

