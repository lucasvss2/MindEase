import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle, View, ViewStyle } from "react-native";
import { NotificationDropdown } from "../NotificationDropdown";
import { UserSettingsDropdown } from "../UserSettingsDropdown";

export function Header() {
  const { fontType } = useUserPreferencesStore();
  const scaledText3xlSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["3xl"],
    "font",
  );
  const scaledSpacingLgSize = useAccessibilityScale<number>(
    TOKENS.SPACING.lg,
    "number",
  );

  return (
    <View
      className={cn(
        "flex-row items-center justify-between border-b border-neutral-200 bg-neutral-0",
      )}
      style={{
        padding: scaledSpacingLgSize,
      }}
    >
      <Text
        className='text-blue-600'
        style={[{ fontFamily: fontType, fontWeight: 600 }, scaledText3xlSize]}
      >
        MindEase
      </Text>
      <View
        className='flex-row items-center'
        style={{ gap: scaledSpacingLgSize } as ViewStyle}
      >
        <NotificationDropdown />
        <UserSettingsDropdown />
      </View>
    </View>
  );
}

