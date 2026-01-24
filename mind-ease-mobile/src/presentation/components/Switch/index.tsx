import { cn } from "@/utils/twClassnamesResolver";
import React from "react";
import { Switch as SwitchNative, SwitchProps } from "react-native";

export const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <SwitchNative
      {...props}
      trackColor={{ false: "#EDEDED", true: "#008FFF" }}
      thumbColor={props.value ? "#fff" : "#79747E"}
      ios_backgroundColor='#EDEDED'
      className={cn(!props.value && 'border border-neutral-600')}
    />
  );
};

