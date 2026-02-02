import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle } from "react-native";
import { ICardsSharedProps } from "../interface";

export const CardParagraph = ({
  children,
  className = "",
}: ICardsSharedProps) => {
  const scaledFontSpacing = useAccessibilityScale<TextStyle>(18);

  return (
    <Text
      className={cn("text-neutral-900 font-lexend-regular", className)}
      style={[scaledFontSpacing]}
    >
      {children}
    </Text>
  );
};

