import React from "react";
import { View, Pressable } from "react-native";
import { ReactNode } from "react";

interface DropdownTriggerProps {
  trigger: ReactNode;
  badge?: ReactNode;
  onPress: () => void;
  accessibilityLabel?: string;
  testID?: string
}

export function DropdownTrigger({
  trigger,
  badge,
  onPress,
  accessibilityLabel,
  testID
}: DropdownTriggerProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      testID={testID}
    >
      <View className="relative">
        {trigger}
        {badge && (
          <View className="absolute top-1 right-1" pointerEvents="none">
            {badge}
          </View>
        )}
      </View>
    </Pressable>
  );
}
