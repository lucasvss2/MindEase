import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import React from "react";
import { Text, TextStyle } from "react-native";
import { formColorByContrast } from "../form-field.variants";

export const FormFieldLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scaledLabelSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );
  const { fontType, contrast } = useUserPreferencesStore();

  return (
    <Text
      className='font-lexend-semi-bold text-neutral-950 mb-1'
      style={[
        scaledLabelSize,
        {
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          color: formColorByContrast[contrast].default,
        },
      ]}
    >
      {children}
    </Text>
  );
};

