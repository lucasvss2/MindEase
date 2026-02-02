import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Card,
  Dropdown,
  DropdownItem,
  ScreenHeader,
} from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { lightenHex } from "@/utils/colorUtils";
import { SECTION_CONTENT } from "@/data/mocks";
import { cn } from "@/utils/twClassnamesResolver";

const COLUMN_OPTIONS = [
  { key: "paraFazer" as const, label: "Para fazer", icon: "format-list-bulleted" as const },
  { key: "emProgresso" as const, label: "Em progresso", icon: "sync" as const },
  { key: "concluido" as const, label: "Concluído", icon: "check-circle-outline" as const },
] as const;

type ColumnKey = (typeof COLUMN_OPTIONS)[number]["key"];

export function Details() {
  const router = useRouter();
  const { id, title, color } = useLocalSearchParams<{
    id: string;
    title: string;
    color?: string;
  }>();
  const headerColor = color ?? THEME_COLORS.neutral[300];
  const [visibleColumns, setVisibleColumns] = useState<Record<ColumnKey, boolean>>({
    paraFazer: true,
    emProgresso: true,
    concluido: true,
  });
  const toggleColumn = (key: ColumnKey) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <ScreenHeader
        onBack={() => router.back()}
        title={title ?? "Detalhes"}
        titlePrefix={
          <View
            className="rounded-full items-center justify-center ml-2"
            style={{
              width: 29,
              height: 29,
              borderRadius: 14.5,
              backgroundColor: lightenHex(headerColor),
            }}
          >
            <View
              className="rounded-full"
              style={{
                width: 14,
                height: 14,
                borderRadius: 7,
                backgroundColor: headerColor,
              }}
            />
          </View>
        }
        rightSlot={
          <Dropdown
            trigger={
              <View className="p-2">
                <MaterialIcons
                  name="more-vert"
                  size={24}
                  color={THEME_COLORS.neutral[1000]}
                />
              </View>
            }
            position="right"
            align="bottom"
            closeOnItemPress
            accessibilityLabel="Opções do quadro"
          >
            <DropdownItem
              onPress={() => {
                // TODO: Abrir fluxo de adicionar tarefa
              }}
            >
              <Text className="text-sm font-lexend-regular text-neutral-1000">
                Adicionar tarefa
              </Text>
            </DropdownItem>
            <DropdownItem
              onPress={() => {
                // TODO: Confirmar e excluir quadro
                router.back();
              }}
            >
              <Text className="text-sm font-lexend-regular text-neutral-1000">
                Excluir quadro
              </Text>
            </DropdownItem>
          </Dropdown>
        }
        className="bg-neutral-0 border-neutral-200"
      />
      <View className={cn("flex-1")}>
        <View
          className={cn(
            "px-5 pt-6 pb-6 border-b border-neutral-200 bg-neutral-0"
          )}
        >
          <Text className="text-base font-lexend-regular text-neutral-600">
            Colunas visíveis:{" "}
          </Text>
          <View className={cn("flex-row gap-4 mt-3 flex-nowrap")}>
            {COLUMN_OPTIONS.map(({ key, label }) => (
              <TouchableOpacity
                key={key}
                activeOpacity={0.7}
                onPress={() => toggleColumn(key)}
                className={cn("flex-row items-center gap-2")}
              >
                <MaterialIcons
                  name={
                    visibleColumns[key]
                      ? "check-box"
                      : "check-box-outline-blank"
                  }
                  size={28}
                  color={THEME_COLORS.blue[600]}
                />
                <Text className="text-base font-lexend-regular text-neutral-1000">
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <ScrollView
          className={cn("flex-1")}
          contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 12, paddingBottom: 24 }}
          showsVerticalScrollIndicator={false}
        >
          <View className={cn("gap-0")}>
            {COLUMN_OPTIONS.filter(({ key }) => visibleColumns[key]).map(({ key, label }) => (
              <View
                key={key}
                className={cn("py-3")}
              >
                <View className={cn("flex-row items-center gap-2")}>
                  <MaterialIcons
                    name={COLUMN_OPTIONS.find((o) => o.key === key)?.icon ?? "list"}
                    size={22}
                    color={THEME_COLORS.neutral[1000]}
                  />
                  <View className={cn("flex-row")}>
                    <Text className="text-base font-lexend-semi-bold text-neutral-1000">
                      {label}
                    </Text>
                    <Text className="text-base font-lexend-regular text-neutral-1000">
                      {" "}({SECTION_CONTENT[key].items.length})
                    </Text>
                  </View>
                </View>
                <Card
                    className="mt-3 border-0 shadow-none gap-3"
                    style={{ backgroundColor: SECTION_CONTENT[key].bg }}
                  >
                    {SECTION_CONTENT[key].items.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        onPress={() => {}}
                      >
                        <Card
                          className={cn(
                            "bg-neutral-0 border border-neutral-200"
                          )}
                        >
                          <View className={cn("gap-1")}>
                            <Text className="text-sm font-lexend-semi-bold text-neutral-1000">
                              {item.title}
                            </Text>
                            <Text className="text-xs font-lexend-regular text-neutral-600">
                              {item.description}
                            </Text>
                            <Text className="text-xs font-lexend-regular text-neutral-600 mt-1">
                              {item.completed}/{item.total}
                            </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>
                    ))}
                </Card>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
