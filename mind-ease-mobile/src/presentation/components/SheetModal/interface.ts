import type { ReactNode } from "react";
import { TextStyle } from "react-native";

export interface ISheetModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  snapPoints?: [number, number];
  initialSnapIndex?: 0 | 1;
  closeButtonAccessibilityLabel?: string;
  children: ReactNode;
  titleStyle?: TextStyle;
  testId?: string
}

