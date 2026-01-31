import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import React from "react";
import { Text, TextStyle } from "react-native";

export const FormFieldLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { fontType } = useUserPreferencesStore();
  const scaledLabelSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );

  return (
    <Text
      className='font-semibold text-neutral-950 mb-1'
      style={[scaledLabelSize, { fontFamily: TOKENS.FONT_FAMILY[fontType] }]}
    >
      {children}
    </Text>
  );
};

