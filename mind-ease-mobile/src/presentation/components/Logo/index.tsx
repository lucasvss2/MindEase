import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle } from "react-native";

export const Logo = ({ size = "sm" }: { size?: "xs" | "sm" }) => {
  const isSizeXs = size === "xs";

  const scaledText = useAccessibilityScale<TextStyle>(
    isSizeXs ? TOKENS.FONT_SIZE.xl : TOKENS.FONT_SIZE["3xl"],
    "font",
  );

  const scaledWidth = useAccessibilityScale<number>(
    isSizeXs ? TOKENS.SIZE.sm : 112,
    "number",
  );

  const scaledPadding = useAccessibilityScale<number>(
    isSizeXs ? TOKENS.SPACING["2xs"] : TOKENS.SPACING.sm,
    "number",
  );

  const { fontType } = useUserPreferencesStore();

  return (
    <Text
      className={cn(
        "border  border-blue-400 bg-blue-100  text-blue-600 font-extrabold rounded-lg text-center items-center font-inter-black shadow-lg",
      )}
      style={[
        scaledText,
        {
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          width: scaledWidth,
          padding: scaledPadding,
        },
      ]}
    >
      M
    </Text>
  );
};

