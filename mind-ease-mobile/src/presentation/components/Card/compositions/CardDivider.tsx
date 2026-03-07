import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { View } from "react-native";

export const CardDivider = () => {
  const scaledMargin = useAccessibilityScale<number>(TOKENS.SPACING.xl, "number");

  return (
    <View
      className='border border-neutral-600'
      style={{ marginVertical: scaledMargin }}
    />
  );
};