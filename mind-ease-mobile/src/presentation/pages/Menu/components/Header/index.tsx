import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Image, Text, TextStyle, View, ViewStyle } from "react-native";
import { UserSettingsDropdown } from "../UserSettingsDropdown";

export function Header() {
  const { fontType, enableSummaryMode } = useUserPreferencesStore();
  const scaledTextXlSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["xl"],
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
      <View className='shadow-lg items-center flex-row gap-4 shadow-gray-800'>
        {!enableSummaryMode && (
          <>
            <Image
              source={require("../../../../../../assets/images/logo.jpeg")}
              style={{ width: 50, height: 50 }}
              className='shadow-lg'
            />

            <Text
              className='text-blue-600'
              style={[
                { fontFamily: fontType, fontWeight: 900 },
                scaledTextXlSize,
              ]}
            >
              Mind
              <Text
                className='text-blue-600'
                style={[
                  { fontFamily: fontType, fontWeight: 600 },
                  scaledTextXlSize,
                ]}
              >
                Ease
              </Text>
            </Text>
          </>
        )}
      </View>

      <View
        className={cn(
          "flex-row items-center",
          enableSummaryMode && "flex-1 justify-end gap-3",
        )}
        style={{ gap: scaledSpacingLgSize } as ViewStyle}
      >
        <UserSettingsDropdown />
      </View>
    </View>
  );
}

