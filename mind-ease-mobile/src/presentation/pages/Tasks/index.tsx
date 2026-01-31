import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar } from "@/presentation/components";
import { cn } from "@/utils/twClassnamesResolver";
import { THEME_COLORS } from "@/presentation/constants/theme";

export function Tasks() {
  const router = useRouter();

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <View
        className={cn(
          "flex-row items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-0"
        )}
      >
        <Text className="text-lg font-lexend-semi-bold text-neutral-1000">
          App
        </Text>
        <View className="flex-row items-center gap-4">
          <TouchableOpacity
            className="p-2"
            accessibilityRole="button"
            accessibilityLabel="Notificações"
          >
            <MaterialIcons
              name="notifications-none"
              size={24}
              color={THEME_COLORS.neutral[1000]}
            />
          </TouchableOpacity>
          <Avatar
            name="Usuário"
            size={32}
            onPress={() => {
              // TODO: Navegar para perfil
            }}
          />
        </View>
      </View>
      <View className={cn("flex-1 px-5 py-6")}>
        <Text className="text-xl font-lexend-semi-bold text-neutral-1000">
          Tarefas
        </Text>
      <TouchableOpacity
        onPress={() => router.push("/focus")}
        className="mt-4 p-3 rounded-md bg-blue-100 border border-blue-400 active:bg-blue-200"
      >
        <Text className="text-base font-lexend-medium text-neutral-1000">
          Ir para Focus
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}
