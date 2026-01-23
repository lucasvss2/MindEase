import { ReactNode } from "react";

export interface IFormFieldProps {
    label?: string;
    message?: string;
    children: ReactNode
    variant?: 'default' | 'error'
}