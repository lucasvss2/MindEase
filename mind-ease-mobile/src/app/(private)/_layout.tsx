import { useFonts } from "@/presentation/hooks/useFonts";
import "@/app/styles/global.css";
import { FontAwesome } from "@expo/vector-icons";
import { SplashScreen, Tabs } from "expo-router";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  useFonts();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008FFF",
        tabBarInactiveTintColor: "#383838",
        tabBarStyle: {
          paddingTop: 12,
          paddingBottom: 8,
          height: 64,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarLabelStyle: {
          fontFamily: "Lexend_600SemiBold",
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          href: null, // Oculta do rodapé
        }}
      />
      <Tabs.Screen
        name='focus'
        options={{
          href: null, // Oculta do rodapé - acessível apenas via navegação programática
          tabBarStyle: { display: 'none' }, // Oculta o rodapé quando estiver na página Focus
        }}
      />
      <Tabs.Screen
        name='tasks'
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='tasks' color={color} size={size} />
          ),
          title: "Tarefas",
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='cog' color={color} size={size} />
          ),
          title: "Configurações",
        }}
      />
    </Tabs>
  );
}

