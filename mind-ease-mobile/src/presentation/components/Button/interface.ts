import { VariantProps } from "class-variance-authority";
import { TouchableOpacityProps } from "react-native";
import { buttonVariants } from "./button.variants";

export interface IButtonProps 
  extends Omit<TouchableOpacityProps, 'disabled'>, 
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  textClassName?: string;
}