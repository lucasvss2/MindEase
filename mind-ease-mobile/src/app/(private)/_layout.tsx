import "@/app/styles/global.css";
import { TOKENS } from "@/presentation/constants";
import { useFonts } from "@/presentation/hooks/useFonts";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { SplashScreen, Tabs } from "expo-router";
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  useFonts();
  const { fontType } = useUserPreferencesStore();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#008FFF",
        tabBarInactiveTintColor: "#383838",
        tabBarStyle: {
          paddingTop: 12,
          paddingBottom: 8,
          paddingHorizontal: 16,
          height: 64,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
          minWidth: 80,
          paddingHorizontal: 8,
        },
        tabBarLabelStyle: {
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          fontWeight: 600,
          fontSize: 16,
        },
        tabBarAllowFontScaling: false,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name='focus'
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name='details'
        options={{
          href: null,
          tabBarStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name='tasks'
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='check-square-o' color={color} size={size} />
          ),
          title: "Tarefas",
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='cog-outline'
              color={color}
              size={size}
            />
          ),
          title: "Configurações",
        }}
      />
    </Tabs>
  );
}

