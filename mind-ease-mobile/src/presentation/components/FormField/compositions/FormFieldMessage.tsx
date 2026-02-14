import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { Text, TextStyle } from "react-native";
import { messageVariants } from "../form-field.variants";
import { IFormFieldSharedProps } from "../interface";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";

export const FormFieldMessage: React.FC<IFormFieldSharedProps> = ({
  children,
  variant,
}) => {
  const scaledInputAndMessageSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.sm,
  );
  const { fontType } = useUserPreferencesStore();

  return (
    <Text
      className={messageVariants({ variant })}
      style={[
        scaledInputAndMessageSize,
        { fontFamily: TOKENS.FONT_FAMILY[fontType] },
      ]}
    >
      {children}
    </Text>
  );
};

