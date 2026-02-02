import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import React from "react";
import { View } from "react-native";
import { FormFieldLabel } from "..";
import { IFormFieldProps } from "../interface";
import { FormFieldMessage } from "./FormFieldMessage";

export const FormField: React.FC<IFormFieldProps> = ({
  label,
  message,
  variant = "default",
  children,
}) => {
  const scaledGap = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "spacing",
  );

  return (
    <View style={{ gap: scaledGap }}>
      {label && <FormFieldLabel>{label}</FormFieldLabel>}

      {children}

      {message && (
        <FormFieldMessage variant={variant}>{message}</FormFieldMessage>
      )}
    </View>
  );
};

