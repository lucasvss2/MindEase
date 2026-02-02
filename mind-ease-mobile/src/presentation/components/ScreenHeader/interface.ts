import { ReactNode } from "react";

export interface IScreenHeaderProps {
  onBack: () => void;
  title: string;
  titlePrefix?: ReactNode;
  rightSlot?: ReactNode;
  className?: string;
  titleClassName?: string;
}
