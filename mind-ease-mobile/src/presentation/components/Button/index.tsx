import { cn } from "@/utils/twClassnamesResolver";
import React, { useState } from "react";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";

import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { IButtonProps } from "./interface";

export const Button: React.FC<IButtonProps> = ({
  children,
  variant = "default",
  size = "sm",
  className,
  textClassName,
  style,
  disabled,
  leftIcon,
  ...props
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const { fontType, contrast } = useUserPreferencesStore();
  const scaledContainerPadding = useAccessibilityScale(
    TOKENS.SPACING[size as "sm" | "md"],
    "spacing",
  ) as number;

  const scaledFontSpacing = useAccessibilityScale(
    TOKENS.FONT_SIZE[size === "md" ? "base" : "sm"],
  ) as TextStyle;

  const buttonVariants = {
    low: {
      default: {
        backgroundColor: TOKENS.COLORS.blue[isPressed ? 250 : 50],
        color: TOKENS.COLORS.blue[815],
        borderColor: isPressed ? TOKENS.COLORS.blue[425] : "transparent",
        borderStyle: isPressed ? "solid" : "none",
      },
      dashed: {
        backgroundColor: TOKENS.COLORS.neutral[isPressed ? 125 : 0],
        borderWidth: 1,
        borderColor: TOKENS.COLORS.blue[isPressed ? 600 : 650],
        borderStyle: "dashed",
        color: TOKENS.COLORS.neutral[875],
      },
      outlined: {
        backgroundColor: TOKENS.COLORS.blue[isPressed ? 100 : 50],
        borderWidth: 1,
        borderColor: TOKENS.COLORS.blue[isPressed ? 400 : 425],
        borderStyle: "solid",
        color: TOKENS.COLORS.blue[isPressed ? 815 : 850],
      },
      link: {
        color: TOKENS.COLORS.neutral[625],
        backgroundColor: isPressed ? TOKENS.COLORS.neutral[0] : "transparent",
      },
      neutral: {
        backgroundColor: TOKENS.COLORS.neutral[250],
        color: TOKENS.COLORS.neutral[650],
      },
    },
    moderate: {
      default: {
        backgroundColor: TOKENS.COLORS.blue[isPressed ? 275 : 50],
        color: TOKENS.COLORS.blue[975],
        borderColor: isPressed ? TOKENS.COLORS.blue[650] : "transparent",
        borderStyle: isPressed ? "solid" : "none",
      },
      dashed: {
        backgroundColor: TOKENS.COLORS.neutral[isPressed ? 350 : 0],
        borderWidth: 1,
        borderColor: TOKENS.COLORS.blue[isPressed ? 600 : 650],
        borderStyle: "dashed",
        color: TOKENS.COLORS.neutral[isPressed ? 850 : 950],
      },
      outlined: {
        backgroundColor: TOKENS.COLORS.blue[50],
        borderWidth: 1,
        borderColor: TOKENS.COLORS.blue[400],
        borderStyle: "solid",
        color: TOKENS.COLORS.neutral[950],
      },
      link: {
        color: TOKENS.COLORS.neutral[850],
        backgroundColor: isPressed ? TOKENS.COLORS.neutral[0] : "transparent",
      },
      neutral: {
        backgroundColor: TOKENS.COLORS.neutral[isPressed ? 125 : 400],
        color: TOKENS.COLORS.neutral[850],
        borderWidth: 1,
        borderColor: isPressed ? TOKENS.COLORS.neutral[600] : "transparent",
        borderStyle: isPressed ? "solid" : "none",
      },
    },
    high: {
      default: {
        backgroundColor: TOKENS.COLORS.blue[250],
        color: TOKENS.COLORS.neutral[1000],
        borderWidth: 1,
        borderColor: isPressed ? TOKENS.COLORS.blue[400] : "transparent",
        borderStyle: isPressed ? "solid" : "none",
      },
      dashed: {
        backgroundColor: TOKENS.COLORS.neutral[isPressed ? 250 : 0],
        borderWidth: 1,
        borderColor: TOKENS.COLORS.blue[400],
        borderStyle: "dashed",
        color: TOKENS.COLORS.neutral[950],
      },
      outlined: {
        backgroundColor: TOKENS.COLORS.blue[isPressed ? 300 : 50],
        borderWidth: 1,
        borderColor: TOKENS.COLORS.blue[isPressed ? 600 : 400],
        borderStyle: "solid",
        color: TOKENS.COLORS.neutral[1000],
      },
      link: {
        color: TOKENS.COLORS.neutral[1000],
        backgroundColor: isPressed ? TOKENS.COLORS.neutral[0] : "transparent",
      },
      neutral: {
        backgroundColor: TOKENS.COLORS.neutral[isPressed ? 275 : 400],
        color: TOKENS.COLORS.neutral[850],
        borderWidth: isPressed ? 1 : 0,
        borderColor: isPressed ? TOKENS.COLORS.neutral[925] : "transparent",
      },
    },
  } as any;

  const textColorByContrast = buttonVariants[contrast][variant!].color;

  const Content = () => (
    <Text
      className={cn(
        "bg-transparent text-center",
        size === "sm" ? "font-normal" : "font-medium",
        textClassName,
      )}
      style={[
        scaledFontSpacing,
        { color: textColorByContrast, fontFamily: fontType },
      ]}
    >
      {children}
    </Text>
  );

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled!}
      className={cn(
        "flex-row items-center justify-center rounded-md shadow-sm",
        disabled &&'cursor-not-allowed',
        className,
      )}
      style={[
        {
          padding: scaledContainerPadding,
          fontSize: scaledFontSpacing,
        },
        buttonVariants[contrast][disabled ? "neutral" : variant!],

        ,
        style,
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
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
          <Content />
        </View>
      ) : (
        <Content />
      )}
    </TouchableOpacity>
  );
};

