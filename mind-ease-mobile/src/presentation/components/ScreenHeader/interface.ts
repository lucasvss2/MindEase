import { ReactNode } from "react";

export interface IScreenHeaderProps {
  onBack: () => void;
  title: string;
  rightSlot?: ReactNode;
  className?: string;
  titleClassName?: string;
}
