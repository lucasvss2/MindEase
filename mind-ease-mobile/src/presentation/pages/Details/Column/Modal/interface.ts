import { TaskResponseDTO } from "@/data/dtos/task-dto";
import { ColumnModel } from "@/domain/models/ColumnModel";
import { TaskModel } from "@/domain/models/TaskModel";

export interface IColumnModalSharedProps {
  visible: boolean;
}

export interface ICreateColumnModal extends IColumnModalSharedProps {
  columnId?: string;
  boardId: string;
  setVisible: (visible: boolean) => void;
}

export interface IEditColumnModal extends IColumnModalSharedProps {
  columns: ColumnModel[];
  onClose: () => void;
}


export type TVisibleColumns = Record<string,{
  isVisible: boolean,
  tasks: [] | TaskModel[] | undefined | null
}>

