import { Card } from "@/presentation/components/Card";
import { TOKENS } from "@/presentation/constants";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { lightenHex } from "@/utils/colorUtils";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import type { IBoardCardProps } from "./interface";

export type { IBoardCardData, IBoardCardProps } from "./interface";

export function BoardCard({ board }: IBoardCardProps) {
  const router = useRouter();
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType, enableSummaryMode } =
    activeProfileId === "study" ? study : work;

  const scaledTextLg = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.lg);
  const scaledTextXs = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.xs);

  const scaled3xsSize = useAccessibilityScale<number>(
    TOKENS.SIZE["3xs"],
    "number",
  );

  const scaledLgSize = useAccessibilityScale<number>(TOKENS.SIZE.lg, "number");

  const onNavigateToDetails = () => {
    if (!board) return;

    router.push({
      pathname: "/details",
      params: { id: board.id, name: board.name, color: board.color },
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onNavigateToDetails}>
      <Card className='flex-row items-center gap-5'>
        {!enableSummaryMode && (
          <View
            className='rounded-full items-center justify-center'
            style={{
              backgroundColor: lightenHex(board?.color),
              width: scaledLgSize,
              height: scaledLgSize,
            }}
          >
            <View
              className='rounded-full'
              style={{
                backgroundColor: board?.color,
                width: scaled3xsSize,
                height: scaled3xsSize,
              }}
            />
          </View>
        )}

        <View className='flex-1'>
          <Text
            className='text-neutral-1000'
            style={[
              {
                fontFamily: TOKENS.FONT_FAMILY[fontType],
                fontWeight: 700,
              },
              scaledTextLg,
            ]}
          >
            {board?.name}
          </Text>
          <View className='flex-row items-center mt-1'>
            {!enableSummaryMode && (
              <Text
                className=' text-neutral-600'
                style={[
                  {
                    fontFamily: TOKENS.FONT_FAMILY[fontType],
                    gap: scaled3xsSize,
                  },
                  scaledTextXs,
                ]}
              >
                {board?.tasksCount} tarefas
              </Text>
            )}

            {board?.totalHours && !enableSummaryMode && (
              <>
                <View className='w-1.5 h-1.5 rounded-full bg-neutral-600' />
                <View className='flex-row items-center gap-1.5'>
                  <MaterialIcons
                    name='schedule'
                    size={16}
                    color={THEME_COLORS.neutral[600]}
                  />
                  <Text
                    className='text-neutral-600'
                    style={[
                      { fontFamily: TOKENS.FONT_FAMILY[fontType] },
                      scaledTextXs,
                    ]}
                  >
                    {board?.totalHours}h
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        <MaterialIcons
          name='chevron-right'
          size={scaled3xsSize}
          color={THEME_COLORS.neutral[600]}
        />
      </Card>
    </TouchableOpacity>
  );
}

