import { TextInputProps } from "react-native";

import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface IInputProps extends TextInputProps {
  variant?: "default" | "error";
}
export interface IInputShared extends TextInputProps {
  isError?: boolean;
}
export interface IInputRoot extends IInputShared {
  children: ReactNode;
}

export interface IInputIcon {
  name: any;
  size?: number;
  variant?: 'default' | 'error'
}

export interface IInputPassword extends IInputShared {
  name: string;
  control: any;
  error: FieldError | undefined;
}



export interface IInputFieldPassword {
  
}