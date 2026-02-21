import { ColumnModel } from "@/domain/models/ColumnModel";

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

