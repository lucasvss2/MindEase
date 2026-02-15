import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { View } from "react-native";
import { inputColorsVariant } from "../input.variants";
import { IInputRoot } from "../interface";

export const InputRoot = ({ children, isError = false }: IInputRoot) => {
  const { contrast } = useUserPreferencesStore();

  const scaledGap = useAccessibilityScale<number>(TOKENS.SPACING.xs, "number");
  const scaledPadding = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );

  const variant = isError ? "error" : "default";
  const borderColor = inputColorsVariant[contrast][variant];

  return (
    <View
      className={cn(`border h-14 rounded-md w-full  flex-row items-center`)}
      style={[
        {
          borderColor: borderColor,
          borderWidth: 1,
          gap: scaledGap,
          padding: scaledPadding,
        },
      ]}
    >
      {children}
    </View>
  );
};

