import { ReactNode } from "react";
import { DimensionValue } from "react-native";
import {
  DROPDOWN_POSITIONS,
  DROPDOWN_ALIGNMENTS,
} from "./constants";

export type DropdownPosition = typeof DROPDOWN_POSITIONS[keyof typeof DROPDOWN_POSITIONS];
export type DropdownAlignment = typeof DROPDOWN_ALIGNMENTS[keyof typeof DROPDOWN_ALIGNMENTS];

export interface IDropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  position?: DropdownPosition;
  align?: DropdownAlignment;
  width?: DimensionValue;
  maxHeight?: DimensionValue;
  className?: string;
  contentClassName?: string;
  badge?: ReactNode;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  closeOnOutsidePress?: boolean;
  closeOnItemPress?: boolean;
  accessibilityLabel?: string;
}
