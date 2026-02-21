import { TOKENS } from "@/presentation/constants";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
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
          minWidth: 100,
          paddingHorizontal: 8,
          flex: 1,
        },
        tabBarLabelStyle: {
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          fontWeight: 600,
          fontSize: 16,
          flexShrink: 0,
        },
        tabBarAllowFontScaling: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="check-square-o" color={color} size={size} />
          ),
          title: "Menu",
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
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
