import type { ReactNode } from "react";

export interface ISheetModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  snapPoints?: [number, number];
  initialSnapIndex?: 0 | 1;
  closeButtonAccessibilityLabel?: string;
  children: ReactNode;
}
