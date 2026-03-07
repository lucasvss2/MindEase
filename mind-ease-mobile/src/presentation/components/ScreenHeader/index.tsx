import { TOKENS } from "@/presentation/constants";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import { IScreenHeaderProps } from "./interface";

export function ScreenHeader({
  onBack,
  title,
  titlePrefix,
  rightSlot,
  className,
  titleClassName,
}: IScreenHeaderProps) {
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType } = activeProfileId === "study" ? study : work;

  const scaledMdSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["md"],
    "number",
  );

  const scaledXsSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["xs"],
    "number",
  );

  const scaledXlFontSize = useAccessibilityScale<TextStyle>(
    TOKENS.SPACING["xl"],
  );

  const scaled3xsIconSize = useAccessibilityScale<number>(
    TOKENS.SIZE["3xs"],
    "number",
  );

  const scaledSmSize = useAccessibilityScale<number>(
    TOKENS.SPACING["sm"],
    "number",
  );

  return (
    <View
      className={cn(
        "flex-row items-center border-b border-neutral-200 bg-neutral-0",
        className,
      )}
      style={{ padding: scaledMdSpacing }}
    >
      <View
        className='flex-row items-center flex-1 min-w-0'
        style={{ gap: scaledXsSpacing }}
      >
        <TouchableOpacity
          onPress={onBack}
          accessibilityRole='button'
          accessibilityLabel='Voltar'
          style={{ padding: scaledXsSpacing, marginLeft: scaledXsSpacing }}
        >
          <MaterialIcons
            name='arrow-back'
            size={scaled3xsIconSize}
            color={THEME_COLORS.neutral[1000]}
          />
        </TouchableOpacity>
        {titlePrefix}
        <Text
          className={cn("text-neutral-1000 flex-1", titleClassName)}
          numberOfLines={2}
          adjustsFontSizeToFit
          minimumFontScale={0.7}
          style={[
            scaledXlFontSize,
            { fontFamily: TOKENS.FONT_FAMILY[fontType], fontWeight: 700 },
          ]}
        >
          {title}
        </Text>
      </View>
      {rightSlot ?? <View style={{ width: scaledSmSize }} />}
    </View>
  );
}

