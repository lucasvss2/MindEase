import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { cn } from "@/utils/twClassnamesResolver";
import React from "react";
import { View } from "react-native";
import { ICardsSharedProps } from "../interface";

export const Card: React.FC<ICardsSharedProps> = ({
  children,
  className = "",
  style,
}) => {
  const scaledLgSpacingSize = useAccessibilityScale<number>(
    TOKENS.SPACING.lg,
    "number",
  );

  return (
    <View
      className={cn(
        "w-full rounded-lg border border-neutral-200 shadow-sm bg-neutral-0",
        className,
      )}
      style={[style, { padding: scaledLgSpacingSize }]}
    >
      {children}
    </View>
  );
};

