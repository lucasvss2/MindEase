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

        tabBarLabelStyle: {
          fontFamily: "Lexend_600SemiBold",
          fontSize: 16,
        },
      }}
    >
      <Tabs.Screen
        name='dashboard-settings'
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='th-large' color={color} size={size} />
          ),
          title: "Dashboard",
        }}
      />
    </Tabs>
  );
}

