import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { Avatar } from "@/presentation/components";
import { cn } from "@/utils/twClassnamesResolver";
import { NotificationDropdown } from "../NotificationDropdown";

export function Header() {
  const router = useRouter();

  return (
    <View
      className={cn(
        "flex-row items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-0"
      )}
    >
      <Text className="text-3xl font-lexend-semi-bold text-blue-600">
        MindEase
      </Text>
      <View className="flex-row items-center gap-4">
        <NotificationDropdown />
        <Avatar
          name="Usuário"
          size={32}
          onPress={() => router.push("/focus")}
        />
      </View>
    </View>
  );
}
