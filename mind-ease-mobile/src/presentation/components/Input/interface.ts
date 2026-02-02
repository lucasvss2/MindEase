import { TextInputProps } from "react-native";

export interface IInputProps extends TextInputProps {
    variant?: 'default' | 'error';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onRightIconPress?: () => void;
    containerClassName?: string;
  }