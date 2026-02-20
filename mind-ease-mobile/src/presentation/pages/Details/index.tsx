import { SECTION_CONTENT } from "@/data/mocks";
import {
  Card,
  Dropdown,
  DropdownItem,
  ScreenHeader,
} from "@/presentation/components";
import { TOKENS } from "@/presentation/constants";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { lightenHex } from "@/utils/colorUtils";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

const COLUMN_OPTIONS = [
  {
    key: "paraFazer" as const,
    label: "Para fazer",
    icon: "format-list-bulleted" as const,
  },
  { key: "emProgresso" as const, label: "Em progresso", icon: "sync" as const },
  {
    key: "concluido" as const,
    label: "Concluído",
    icon: "check-circle-outline" as const,
  },
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
  const [visibleColumns, setVisibleColumns] = useState<
    Record<ColumnKey, boolean>
  >({
    paraFazer: true,
    emProgresso: true,
    concluido: true,
  });

  const { fontType } = useUserPreferencesStore();
  const scaledTextBaseSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
    "font",
  );

  const scaledSpacing2xsSize = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );

  const scaledSpacingXsSize = useAccessibilityScale<number>(
    TOKENS.SPACING["xs"],
    "number",
  );

  const scaledSpacingSmSize = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );

  const scaledSpacingMdSize = useAccessibilityScale<number>(
    TOKENS.SPACING.md,
    "number",
  ); 

  const scaledSpacingLgSize = useAccessibilityScale<number>(
    TOKENS.SPACING.lg,
    "number",
  ); 

  const fontSemiBold: TextStyle = {
    fontFamily: fontType,
    fontWeight: 600,
  };

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
            className='rounded-full items-center justify-center'
            style={{
              width: 29,
              height: 29,
              borderRadius: 14.5,
              backgroundColor: lightenHex(headerColor),
              marginLeft: scaledSpacingXsSize,
            }}
          >
            <View
              className='rounded-full'
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
              <View
                style={{
                  padding: scaledSpacingXsSize,
                }}
              >
                <MaterialIcons
                  name='more-vert'
                  size={24}
                  color={THEME_COLORS.neutral[1000]}
                />
              </View>
            }
            position='right'
            align='bottom'
            closeOnItemPress
            accessibilityLabel='Opções do quadro'
          >
            <DropdownItem
              onPress={() => {
                // TODO: Abrir fluxo de adicionar tarefa
              }}
            >
              <Text
                className='  text-neutral-1000'
                style={[
                  { fontFamily: fontType, fontWeight: 400 },
                  scaledTextBaseSize,
                ]}
              >
                Adicionar tarefa
              </Text>
            </DropdownItem>
            <DropdownItem
              onPress={() => {
                // TODO: Confirmar e excluir quadro
                router.back();
              }}
            >
              <Text
                className='text-neutral-1000'
                style={[
                  { fontFamily: fontType, fontWeight: 400 },
                  scaledTextBaseSize,
                ]}
              >
                Excluir quadro
              </Text>
            </DropdownItem>
          </Dropdown>
        }
        className='bg-neutral-0 border-neutral-200'
      />
      <View className={cn("flex-1")} style={{ gap: scaledSpacingMdSize }}>
        <View
          className={cn("border-b border-neutral-200 bg-neutral-0")}
          style={{ padding: scaledSpacingLgSize, gap: scaledSpacingSmSize }}
        >
          <Text
            className='  text-neutral-600'
            style={[
              { fontFamily: fontType, fontWeight: 400 },
              scaledTextBaseSize,
            ]}
          >
            Colunas visíveis:{" "}
          </Text>

          <View
            className={cn("flex-row  flex-nowrap")}
            style={{
              marginTop: scaledSpacing2xsSize,
              gap: scaledSpacingLgSize,
            }}
          >
            {COLUMN_OPTIONS.map(({ key, label }) => (
              <TouchableOpacity
                key={key}
                activeOpacity={0.7}
                onPress={() => toggleColumn(key)}
                className={cn("flex-row items-center ")}
                style={{ gap: scaledSpacingXsSize }}
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
                <Text
                  className='  text-neutral-1000'
                  style={[
                    { fontFamily: fontType, fontWeight: 400 },
                    scaledTextBaseSize,
                  ]}
                >
                  {label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ScrollView
          className={cn("flex-1")}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 12,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className={cn("gap-0")}>
            {COLUMN_OPTIONS.filter(({ key }) => visibleColumns[key]).map(
              ({ key, label }) => (
                <View key={key} style={{ marginBottom: scaledSpacingSmSize }}>
                  <View
                    className={cn("flex-row items-center ")}
                    style={{ gap: scaledSpacing2xsSize }}
                  >
                    <MaterialIcons
                      name={
                        COLUMN_OPTIONS.find((o) => o.key === key)?.icon ??
                        "list"
                      }
                      size={22}
                      color={THEME_COLORS.neutral[1000]}
                    />
                    <View className={cn("flex-row")}>
                      <Text
                        className='  text-neutral-1000'
                        style={[scaledTextBaseSize, fontSemiBold]}
                      >
                        {label}
                      </Text>
                      <Text
                        className='  text-neutral-1000'
                        style={[
                          { fontFamily: fontType, fontWeight: 400 },
                          scaledTextBaseSize,
                        ]}
                      >
                        {" "}
                        ({SECTION_CONTENT[key].items.length})
                      </Text>
                    </View>
                  </View>
                  <Card
                    className='border-0 shadow-none'
                    style={{
                      backgroundColor: SECTION_CONTENT[key].bg,
                      marginTop: scaledSpacingSmSize,
                      gap: scaledSpacingSmSize,
                    }}
                  >
                    {SECTION_CONTENT[key].items.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        onPress={() => {}}
                      >
                        <Card
                          className={cn(
                            "bg-neutral-0 border border-neutral-200",
                          )}
                        >
                          <View style={{ gap: scaledSpacing2xsSize }}>
                            <Text
                              className='  text-neutral-1000'
                              style={[fontSemiBold, scaledTextBaseSize]}
                            >
                              {item.title}
                            </Text>

                            <Text
                              className='  text-neutral-600'
                              style={[
                                { fontFamily: fontType, fontWeight: 400 },
                                scaledTextBaseSize,
                              ]}
                            >
                              {item.description}
                            </Text>

                            <Text
                              className='  text-neutral-600 '
                              style={[
                                {
                                  fontFamily: fontType,
                                  fontWeight: 400,
                                  marginTop: scaledSpacing2xsSize,
                                },
                                scaledTextBaseSize,
                              ]}
                            >
                              {item.completed}/{item.total}
                            </Text>
                          </View>
                        </Card>
                      </TouchableOpacity>
                    ))}
                  </Card>
                </View>
              ),
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

