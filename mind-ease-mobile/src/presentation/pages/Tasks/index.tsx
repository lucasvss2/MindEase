import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Avatar, Dropdown, DropdownItem } from "@/presentation/components";
import { cn } from "@/utils/twClassnamesResolver";
import { THEME_COLORS } from "@/presentation/constants/theme";

interface INotification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read?: boolean;
}

function formatTimestamp(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Agora";
  if (diffMins < 60) return `${diffMins}m`;
  if (diffHours < 24) return `${diffHours}h`;
  if (diffDays < 7) return `${diffDays}d`;
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
}

const MOCK_NOTIFICATIONS: INotification[] = [
  {
    id: "1",
    title: "Timer concluído",
    message: "Seu tempo de foco de 2 minutos foi concluído.",
    timestamp: new Date(Date.now() - 5 * 60000),
    read: false,
  },
  {
    id: "2",
    title: "Nova tarefa",
    message: "Você tem uma nova tarefa para revisar.",
    timestamp: new Date(Date.now() - 2 * 3600000),
    read: false,
  },
  {
    id: "3",
    title: "Lembrete",
    message: "Não se esqueça de fazer uma pausa.",
    timestamp: new Date(Date.now() - 24 * 3600000),
    read: true,
  },
];

export function Tasks() {
  const router = useRouter();
  const [notifications] = useState<INotification[]>(MOCK_NOTIFICATIONS);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const notificationTrigger = (
    <View className="p-2">
      <MaterialIcons
        name="notifications-none"
        size={28}
        color={THEME_COLORS.neutral[1000]}
      />
    </View>
  );

  const notificationBadge =
    unreadCount > 0 ? (
      <View className="absolute top-0 right-0 w-6 h-6 rounded-full bg-red-500 items-center justify-center">
        <Text className="text-xs font-lexend-bold text-neutral-0">
          {unreadCount > 9 ? "9+" : unreadCount}
        </Text>
      </View>
    ) : null;

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
          <Dropdown
            trigger={notificationTrigger}
            badge={notificationBadge}
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
