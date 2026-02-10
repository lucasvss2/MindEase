import { cn } from "@/utils/twClassnamesResolver";
import React from "react";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";

import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { buttonVariants } from "./button.variants";
import { IButtonProps } from "./interface";

export const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  size = "md",
  className,
  textClassName,
  style,
  disabled,
  leftIcon,
  ...props
}) => {
  const { fontType } = useUserPreferencesStore();
  const scaledContainerPadding = useAccessibilityScale(
    TOKENS.SPACING[size as "sm" | "md"],
    "spacing",
  ) as number;

  const scaledFontSpacing = useAccessibilityScale(
    TOKENS.FONT_SIZE[size === "md" ? "base" : "sm"],
  ) as TextStyle;

  const textClasses =
    variant === "default"
      ? "text-neutral-0 font-lexend-bold"
      : "text-neutral-950";
  const content = (
    <Text
      className={cn("bg-transparent text-center", textClasses, textClassName)}
      style={[scaledFontSpacing, { fontFamily: fontType }]}
    >
      {children}
    </Text>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled!}
      className={cn(buttonVariants({ variant, size, disabled }), className)}
      style={[{ padding: scaledContainerPadding }, style]}
      {...props}
    >
      {leftIcon ? (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          {leftIcon}
          {content}
        </View>
      ) : (
        content
      )}
    </TouchableOpacity>
  );
};

