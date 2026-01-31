import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle } from "react-native";
import { ICardsSharedProps } from "../interface";

export const CardParagraph = ({
  children,
  className = "",
}: ICardsSharedProps) => {
  const { fontType } = useUserPreferencesStore();
  const scaledFontSpacing = useAccessibilityScale<TextStyle>(18);

  return (
    <Text
      className={cn("text-neutral-900 font-normal", className)}
      style={[scaledFontSpacing, { fontFamily: TOKENS.FONT_FAMILY[fontType] }]}
    >
      {children}
    </Text>
  );
};

