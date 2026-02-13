import { TouchableOpacityProps } from "react-native";

export interface IButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  textClassName?: string;
  leftIcon?: React.ReactNode;
  size?: "sm" | "md";
  variant?: "default" | "dashed" | "outlined" | "link" | "neutral";
}

