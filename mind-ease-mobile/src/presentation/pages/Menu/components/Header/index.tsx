import { cn } from "@/utils/twClassnamesResolver";
import { Text, View } from "react-native";
import { NotificationDropdown } from "../NotificationDropdown";
import { UserSettingsDropdown } from "../UserSettingsDropdown";

export function Header() {
  return (
    <View
      className={cn(
        "flex-row items-center justify-between px-4 py-3 border-b border-neutral-200 bg-neutral-0",
      )}
    >
      <Text className='text-3xl font-lexend-semi-bold text-blue-600'>
        MindEase
      </Text>
      <View className='flex-row items-center gap-4'>
        <NotificationDropdown />
        <UserSettingsDropdown />
      </View>
    </View>
  );
}
