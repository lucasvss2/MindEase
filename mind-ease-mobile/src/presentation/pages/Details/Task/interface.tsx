import { TaskModel } from "@/domain/models/TaskModel";
import { TVisibleColumns } from "../Column/Modal/interface";

export interface ITaskCardButton {
  task: TaskModel;
}

export interface ITaskList {
  visibleColumns: TVisibleColumns;
  columnId: string;
}

