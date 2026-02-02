import React from "react";
import { View } from "react-native";
import { Button } from "../Button";
import { IButtonGroupProps } from "./interface";

export const ButtonGroup: React.FC<IButtonGroupProps> = ({ buttons }) => {
  return (
    <View className='flex flex-row flex-wrap justify-between items-center gap-4'>
      {buttons?.map(({ conditional, text, ...props }, index) => (
        <Button
          key={index}
          className='shadow-none flex-grow'
          variant={conditional ? "outlined" : "neutral"}
          {...props}
        >
          {text}
        </Button>
      ))}
    </View>
  );
};

