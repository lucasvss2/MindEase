import { TOKENS } from "@/presentation/constants";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import React from "react";
import { Switch as SwitchNative, SwitchProps } from "react-native";

export const Switch: React.FC<SwitchProps> = ({
  className = "",
  trackColor,
  ...props
}) => {
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { contrast } = activeProfileId === "study" ? study : work;

  const styleByContrast = {
    low: {
      trackColor: {
        false: TOKENS.COLORS.neutral[50],
        true: TOKENS.COLORS.blue[600],
      },
      thumbColor: props.value
        ? TOKENS.COLORS.blue[925]
        : TOKENS.COLORS.neutral[600],
    },
    moderate: {
      trackColor: {
        false: TOKENS.COLORS.neutral[200],
        true: TOKENS.COLORS.blue[915],
      },
      thumbColor: props.value
        ? TOKENS.COLORS.neutral[225]
        : TOKENS.COLORS.neutral[600],
    },
    high: {
      trackColor: {
        false: TOKENS.COLORS.neutral[0],
        true: TOKENS.COLORS.blue[900],
      },
      thumbColor: props.value
        ? TOKENS.COLORS.neutral[0]
        : TOKENS.COLORS.neutral[890],
    },
  };

  const resolvedTrackColor = trackColor ?? styleByContrast[contrast].trackColor;
  const iosBackgroundColor = resolvedTrackColor.false;

  return (
    <SwitchNative
      {...props}
      trackColor={resolvedTrackColor}
      thumbColor={styleByContrast[contrast].thumbColor}
      ios_backgroundColor={iosBackgroundColor}
      className={cn(
        !props.value
          ? "border border-neutral-600"
          : "border border-transparent",
        className,
      )}
    />
  );
};

