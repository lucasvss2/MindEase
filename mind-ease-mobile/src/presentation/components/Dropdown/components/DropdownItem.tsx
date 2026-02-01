import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { cn } from "@/utils/twClassnamesResolver";
import { useDropdownContext } from "../context/DropdownContext";

interface DropdownItemProps extends Omit<TouchableOpacityProps, "onPress"> {
  onPress?: () => void;
  className?: string;
}

export function DropdownItem({
  onPress,
  className,
  children,
  ...props
}: DropdownItemProps) {
  const { close, closeOnItemPress } = useDropdownContext();

  const handlePress = () => {
    onPress?.();
    if (closeOnItemPress) {
      close();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className={cn("px-4 py-3 border-b border-neutral-200", className)}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
