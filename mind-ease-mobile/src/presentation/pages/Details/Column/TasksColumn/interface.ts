import { ReactNode } from "react";

export interface IColumnTasksSection {
  boardColor: string;
  children: ReactNode;
  boardId: string;
  columnId: string
  columnName: string
}

export type TTasksColumn = Omit<IColumnTasksSection, "children">;

