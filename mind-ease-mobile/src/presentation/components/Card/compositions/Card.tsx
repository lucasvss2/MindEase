import React from "react";
import { View } from "react-native";
import { cn } from "@/utils/twClassnamesResolver";
import { ICardsSharedProps } from "../interface";

export const Card: React.FC<ICardsSharedProps> = ({
  children,
  className = "",
}) => {
  return (
    <View
      className={cn(
        "w-full rounded-lg border border-neutral-200 shadow-sm bg-neutral-0 px-5 py-5",
        className,
      )}
    >
      {children}
    </View>
  );
};

