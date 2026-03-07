import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { TextInput } from "react-native";
import { inputColorsVariant } from "../input.variants";
import { IInputProps } from "../interface";

export const InputField = ({
  variant = "default",
  className,
  ...props
}: IInputProps) => {
  const scaledPadding = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "spacing",
  );

  const scaledSmSize = useAccessibilityScale<number>(
    TOKENS.SIZE["sm"],
    "number",
  );

  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType, contrast } = activeProfileId === "study" ? study : work;
  const colorByContrast = inputColorsVariant[contrast].default;

  return (
    <TextInput
      className={cn("flex-1", className)}
      placeholderTextColor={colorByContrast}
      style={[
        {
          height: scaledSmSize,
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

