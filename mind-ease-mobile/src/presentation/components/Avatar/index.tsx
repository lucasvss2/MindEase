import React from "react";
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { cn } from "@/utils/twClassnamesResolver";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { IAvatarProps } from "./interface";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() || "";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({
  imageUri,
  name,
  size = 32,
  className,
  textClassName,
  onPress,
}: IAvatarProps) {
  const hasImage = !!imageUri;
  const initials = name ? getInitials(name) : "";

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const content = (
    <View
      className={cn(
        "items-center justify-center overflow-hidden bg-blue-400",
        className
      )}
      style={containerStyle}
    >
      {hasImage ? (
        <Image
          source={typeof imageUri === "string" ? { uri: imageUri } : imageUri}
          className="w-full h-full"
          resizeMode="cover"
        />
      ) : initials ? (
        <Text
          className={cn(
            "font-lexend-semi-bold text-neutral-0",
            textClassName
          )}
          style={{ fontSize: size * 0.4 }}
        >
          {initials}
        </Text>
      ) : (
        <MaterialIcons
          name="person"
          size={size * 0.6}
          color={THEME_COLORS.neutral[0]}
        />
      )}
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel="Avatar do usuário"
      >
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}
