import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { Text, TextStyle } from "react-native";
import { inputColorsVariant } from "../../Input/input.variants";
import { messageVariants } from "../form-field.variants";
import { IFormFieldSharedProps } from "../interface";

export const FormFieldMessage: React.FC<IFormFieldSharedProps> = ({
  children,
  variant = "default",
}) => {
  const scaledInputAndMessageSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.sm,
  );
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType, contrast } = activeProfileId === "study" ? study : work;
  const textColor = inputColorsVariant[contrast][variant];

  return (
    <Text
      className={messageVariants({ variant })}
      style={[
        scaledInputAndMessageSize,
        { fontFamily: TOKENS.FONT_FAMILY[fontType], color: textColor },
      ]}
    >
      {children}
    </Text>
  );
};

