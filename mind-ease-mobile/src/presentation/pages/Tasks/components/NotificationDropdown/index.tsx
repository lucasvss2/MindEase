import { useState } from "react";
import { View, Text, ScrollView, TextStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  MOCK_NOTIFICATIONS,
  type INotification,
} from "@/data/mocks";
import { Dropdown, DropdownItem } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { formatTimestamp } from "@/utils/dateUtils";
import { cn } from "@/utils/twClassnamesResolver";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";

export function NotificationDropdown() {
  const [notifications] = useState<INotification[]>(MOCK_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const { fontType } = useUserPreferencesStore();
  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
    "font",
  );
  const scaledTextSm = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.sm,
    "font",
  );
  const scaledTextXs = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.xs,
    "font",
  );

  const scaledSpacingXs = useAccessibilityScale<number>(
    TOKENS.SPACING.xs,
    "number",
  );
  const scaledSpacingSm = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );
  const scaledSpacingMd = useAccessibilityScale<number>(
    TOKENS.SPACING.md,
    "number",
  );
  const scaledSpacing2xl = useAccessibilityScale<number>(
    TOKENS.SPACING["2xl"],
    "number",
  );
  const scaledSpacing2xs = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );

  const trigger = (
    <View style={{ padding: scaledSpacingXs }}>
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
        <View
          className="flex-row items-center justify-between border-b border-neutral-200"
          style={{
            paddingHorizontal: scaledSpacingMd,
            paddingVertical: scaledSpacingSm,
          }}
        >
          <Text
            className="text-base text-neutral-1000"
            style={[{ fontFamily: fontType, fontWeight: 600 }, scaledTextBase]}
          >
            Notificações
          </Text>
        </View>
        <ScrollView className="max-h-80">
          {notifications.length === 0 ? (
            <View
            className="items-center"
              style={{
                paddingHorizontal: scaledSpacingMd,
                paddingVertical: scaledSpacing2xl,
              }}
            >
              <MaterialIcons
                name="notifications-none"
                size={48}
                color={THEME_COLORS.neutral[300]}
              />
              <Text
                className="text-neutral-600" 
                style={[
                  { fontFamily: fontType, fontWeight: 400, marginTop: scaledSpacingSm },
                  scaledTextSm,
                ]}
              >
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
                <View
                className="flex-row items-center"
                  style={{

                    gap: scaledSpacingSm,
                  }}
                >
                  {!notification.read && (
                    <View
                    className="w-2 h-2 rounded-full bg-blue-400"
                      style={{
                        marginTop: scaledSpacingXs,
                      }}
                    />
                  )}
                  <View className="flex-1">
                    <Text
                      className=" text-neutral-1000"
                      style={[{ fontFamily: fontType, fontWeight: 600 }, scaledTextSm]}
                    >
                      {notification.title}
                    </Text>
                    <Text
                      className=" text-neutral-600"
                      style={[
                        { fontFamily: fontType, fontWeight: 400, marginTop: scaledSpacing2xs },
                        scaledTextXs,
                      ]}
                    >
                      {notification.message}
                    </Text>
                    <Text
                      className=" text-neutral-400"
                      style={[
                        { fontFamily: fontType, fontWeight: 400, marginTop: scaledSpacing2xs },
                        scaledTextXs,
                      ]}
                    >
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
