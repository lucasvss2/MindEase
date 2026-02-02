import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { View } from "react-native";

export const CardDivider = () => {
  const scaledMargin = useAccessibilityScale<number>(24, "number");

  return (
    <View
      className='border border-neutral-600'
      style={{ marginVertical: scaledMargin }}
    />
  );
};