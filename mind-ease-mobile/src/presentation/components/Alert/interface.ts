import { ReactNode } from "react";

export type TAlertType = "info" | "warning" | "danger";

export interface IAlert {
  title: string;
  children: ReactNode;
  type?: TAlertType;
}

