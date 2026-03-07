import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { View } from "react-native";
import { inputColorsVariant } from "../input.variants";
import { IInputRoot } from "../interface";

export const InputRoot = ({
  children,
  isError = false,
  className = "",
}: IInputRoot) => {
  const { contrast } = useUserPreferencesStore();

  const scaledGap = useAccessibilityScale<number>(TOKENS.SPACING.xs, "number");
  const scaledPadding = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );

  const scaled2xlSize = useAccessibilityScale<number>(
    TOKENS.SIZE["2xl"],
    "number",
  );

  const variant = isError ? "error" : "default";
  const borderColor = inputColorsVariant[contrast][variant];

  return (
    <View
      className={cn(
        `border rounded-md w-full  flex-row items-center`,
        className,
      )}
      style={[
        {
          height: scaled2xlSize,
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

