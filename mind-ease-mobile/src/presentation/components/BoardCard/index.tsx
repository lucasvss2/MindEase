import { Card } from "@/presentation/components/Card";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { lightenHex } from "@/utils/colorUtils";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import type { IBoardCardProps } from "./interface";

export type { IBoardCardData, IBoardCardProps } from "./interface";

export function BoardCard({ board, onPress }: IBoardCardProps) {
  const { fontType } = useUserPreferencesStore();
  const scaledTextLg = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.lg,
    "font",
  );
  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
    "font",
  );
  const scaledSpacingLg = useAccessibilityScale<number>(
    TOKENS.SPACING.lg,
    "number",
  );
  const scaledSpacingXl = useAccessibilityScale<number>(
    TOKENS.SPACING.xl,
    "number",
  );
  const scaledSpacing2xs = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );

  const scaledSpacingXs = useAccessibilityScale<number>(
    TOKENS.SPACING["xs"],
    "number",
  );

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Card
        className='flex-row items-center justify-center'
        style={
          {
            gap: scaledSpacingLg,
          } as ViewStyle
        }
      >
        <View
          className='w-12 h-12 rounded-full items-center justify-center'
          style={{ backgroundColor: lightenHex(board.color) }}
        >
          <View
            className='w-6 h-6 rounded-full'
            style={{ backgroundColor: board.color }}
          />
        </View>

        <View className='flex-1'>
          <Text
            className='text-neutral-1000'
            style={[{ fontFamily: fontType, fontWeight: 600 }, scaledTextLg]}
          >
            {board.title}
          </Text>

          <View
            className='flex-row items-center'
            style={
              {
                gap: scaledSpacingXl,
                marginTop: scaledSpacing2xs,
              } as ViewStyle
            }
          >
            <Text
              className='text-neutral-600'
              style={[
                { fontFamily: fontType, fontWeight: 400 },
                scaledTextBase,
              ]}
            >
              {board.taskCount} tarefas
            </Text>
            <View className='w-1.5 h-1.5 flex-row items-center rounded-full bg-neutral-600' />
            <View
              className='flex-row items-center'
              style={
                {
                  gap: scaledSpacingXs,
                } as ViewStyle
              }
            >
              <MaterialIcons
                name='schedule'
                size={16}
                color={THEME_COLORS.neutral[600]}
              />
              <Text
                className='text-neutral-600'
                style={[
                  { fontFamily: fontType, fontWeight: 400 },
                  scaledTextBase,
                ]}
              >
                {board.hours}h {board.minutes}m
              </Text>
            </View>
          </View>
        </View>

        <MaterialIcons
          name='chevron-right'
          size={24}
          color={THEME_COLORS.neutral[600]}
          style={{ marginBottom: scaledSpacingXl }}
        />
      </Card>
    </TouchableOpacity>
  );
}

