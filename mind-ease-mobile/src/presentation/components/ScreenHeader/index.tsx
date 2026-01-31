import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/utils/twClassnamesResolver";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { IScreenHeaderProps } from "./interface";

export function ScreenHeader({
  onBack,
  title,
  rightSlot,
  className,
  titleClassName,
}: IScreenHeaderProps) {
  return (
    <View
      className={cn(
        "flex-row items-center justify-between px-4 py-3 border-b border-blue-200 bg-blue-50",
        className
      )}
    >
      <TouchableOpacity onPress={onBack} className="p-2" accessibilityRole="button" accessibilityLabel="Voltar">
        <MaterialIcons
          name="arrow-back"
          size={24}
          color={THEME_COLORS.neutral[1000]}
        />
      </TouchableOpacity>
      <Text
        className={cn(
          "text-lg font-lexend-semi-bold text-neutral-1000",
          titleClassName
        )}
      >
        {title}
      </Text>
      {rightSlot ?? <View className="w-10" />}
    </View>
  );
}
