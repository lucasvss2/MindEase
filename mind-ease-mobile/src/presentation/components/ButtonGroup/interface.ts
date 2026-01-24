import { IButtonProps } from "../Button/interface";

export interface IButtonGroupProps {
  buttons: Omit<IButtonProps, "children"> &
    { conditional: boolean; text: string }[];
}
