import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle } from "react-native";
import { ICardsSharedProps } from "../interface";

export const CardParagraph = ({
  children,
  className = "",
}: ICardsSharedProps) => {
  const scaledFontSpacing = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.lg,
  );
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType } = activeProfileId === "study" ? study : work;
  
  return (
    <Text
      className={cn("text-neutral-900", className)}
      style={[
        scaledFontSpacing,
        { fontFamily: TOKENS.FONT_FAMILY[fontType], fontWeight: 500 },
      ]}
    >
      {children}
    </Text>
  );
};

