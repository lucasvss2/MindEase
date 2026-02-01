import React from "react";
import { Pressable } from "react-native";
import { DROPDOWN_DEFAULTS } from "../constants";

interface DropdownOverlayProps {
  onPress: () => void;
}

export function DropdownOverlay({ onPress }: DropdownOverlayProps) {
  const overlayStyle = {
    top: -DROPDOWN_DEFAULTS.OVERLAY_OFFSET,
    bottom: -DROPDOWN_DEFAULTS.OVERLAY_OFFSET,
    left: -DROPDOWN_DEFAULTS.OVERLAY_OFFSET,
    right: -DROPDOWN_DEFAULTS.OVERLAY_OFFSET,
  };

  return (
    <Pressable
      className="absolute inset-0 -z-10"
      style={overlayStyle}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel="Fechar dropdown"
    />
  );
}
