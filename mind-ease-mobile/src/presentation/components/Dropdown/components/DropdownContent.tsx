import React from "react";
import { View, ViewStyle, DimensionValue } from "react-native";
import { ReactNode } from "react";
import { cn } from "@/utils/twClassnamesResolver";
import { getPositionClasses, getAlignmentClasses } from "../utils/dropdownPositioning";
import { DropdownPosition, DropdownAlignment } from "../utils/dropdownPositioning";

interface DropdownContentProps {
  children: ReactNode;
  position: DropdownPosition;
  alignment: DropdownAlignment;
  width: DimensionValue;
  maxHeight: DimensionValue;
  className?: string;
}

export function DropdownContent({
  children,
  position,
  alignment,
  width,
  maxHeight,
  className,
}: DropdownContentProps) {
  const baseClasses = "absolute bg-neutral-0 rounded-lg shadow-lg border border-neutral-200 z-50";
  const positionClass = getPositionClasses(position);
  const alignmentClass = getAlignmentClasses(alignment);

  const style: ViewStyle = {
    width,
    maxHeight,
  };

  return (
    <View
      className={cn(baseClasses, positionClass, alignmentClass, className)}
      style={style}
    >
      {children}
    </View>
  );
}
