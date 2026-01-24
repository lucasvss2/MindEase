import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import React from "react";
import { Text, TextStyle } from "react-native";

export const FormFieldLabel: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scaledLabelSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );

  return (
    <Text
      className='font-lexend-semi-bold text-neutral-950 mb-1'
      style={[scaledLabelSize]}
    >
      {children}
    </Text>
  );
};

