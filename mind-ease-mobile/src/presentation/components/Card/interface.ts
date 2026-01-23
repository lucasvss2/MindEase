import {ReactNode} from "react";

export interface ICardsSharedProps {
  children: ReactNode;
  className?: string;
}

export interface ICardProps extends ICardsSharedProps {
  title: string;
}
