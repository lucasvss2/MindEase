import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { TextInput } from "react-native";
import { inputColorsVariant } from "../input.variants";
import { IInputProps } from "../interface";
import { cn } from "@/utils/twClassnamesResolver";

export const InputField = ({ variant = "default", className, ...props }: IInputProps) => {
  const scaledPadding = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "spacing",
  );
  const { fontType, contrast } = useUserPreferencesStore();

  const colorByContrast = inputColorsVariant[contrast].default;

  return (
    <TextInput
      className={cn('flex-1  h-10', className)}
      placeholderTextColor={colorByContrast}
      style={[
        {
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          fontWeight: 400,
          color: colorByContrast,
          padding: scaledPadding,
        },
      ]}
      {...props}
    />
  );
};

