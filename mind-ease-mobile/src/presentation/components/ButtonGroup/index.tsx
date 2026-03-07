import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import React from "react";
import { View } from "react-native";
import { Button } from "../Button";
import { IButtonGroupProps } from "./interface";

export const ButtonGroup: React.FC<IButtonGroupProps> = ({ buttons }) => {
  const scaledSpacingSize = useAccessibilityScale<number>(
    TOKENS.SPACING.md,
    "number",
  );

  return (
    <View
      className='flex flex-row flex-wrap justify-between items-center'
      style={{ gap: scaledSpacingSize }}
    >
      {buttons?.map(({ conditional, text, ...props }, index) => (
        <Button
          key={index}
          className='shadow-none flex-grow'
          variant={conditional ? "outlined" : "neutral"}
          {...props}
        >
          {text}
        </Button>
      ))}
    </View>
  );
};

