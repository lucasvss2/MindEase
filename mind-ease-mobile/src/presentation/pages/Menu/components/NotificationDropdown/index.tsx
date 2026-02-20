import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  MOCK_NOTIFICATIONS,
  type INotification,
} from "@/data/mocks";
import { Dropdown, DropdownItem } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { formatTimestamp } from "@/utils/dateUtils";
import { cn } from "@/utils/twClassnamesResolver";

export function NotificationDropdown() {
  const [notifications] = useState<INotification[]>(MOCK_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const trigger = (
    <View className="p-2">
      <MaterialIcons
        name="notifications-none"
        size={28}
        color={THEME_COLORS.neutral[1000]}
      />
    </View>
  );

  const badge =
    unreadCount > 0 ? (
      <View className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-500 items-center justify-center">
        <Text className="text-xs font-lexend-bold text-neutral-0">
          {unreadCount > 9 ? "9+" : unreadCount}
        </Text>
      </View>
    ) : null;

  return (
    <Dropdown
      trigger={trigger}
      badge={badge}
      width={320}
      maxHeight={384}
      position="right"
      align="bottom"
      closeOnItemPress={false}
      accessibilityLabel={`Notificações${unreadCount > 0 ? `, ${unreadCount} não lidas` : ""}`}
    >
      <View className="flex-col">
        <View className="flex-row items-center justify-between px-4 py-3 border-b border-neutral-200">
          <Text className="text-base font-lexend-semi-bold text-neutral-1000">
            Notificações
          </Text>
        </View>
        <ScrollView className="max-h-80">
          {notifications.length === 0 ? (
            <View className="px-4 py-8 items-center">
              <MaterialIcons
                name="notifications-none"
                size={48}
                color={THEME_COLORS.neutral[300]}
              />
              <Text className="text-sm font-lexend-regular text-neutral-600 mt-2">
                Nenhuma notificação
              </Text>
            </View>
          ) : (
            notifications.map((notification) => (
              <DropdownItem
                key={notification.id}
                onPress={() => {
                  console.log("Notification pressed:", notification.id);
                  // TODO: Navegar para detalhes da notificação ou marcar como lida
                }}
                className={cn(!notification.read && "bg-blue-50")}
              >
                <View className="flex-row items-start gap-3">
                  {!notification.read && (
                    <View className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                  )}
                  <View className="flex-1">
                    <Text className="text-sm font-lexend-semi-bold text-neutral-1000">
                      {notification.title}
                    </Text>
                    <Text className="text-xs font-lexend-regular text-neutral-600 mt-1">
                      {notification.message}
                    </Text>
                    <Text className="text-xs font-lexend-regular text-neutral-400 mt-1">
                      {formatTimestamp(notification.timestamp)}
                    </Text>
                  </View>
                </View>
              </DropdownItem>
            ))
          )}
        </ScrollView>
      </View>
    </Dropdown>
  );
}
