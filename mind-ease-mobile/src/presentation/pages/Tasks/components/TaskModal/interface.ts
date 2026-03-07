import { ITaskChecklist } from "@/domain/models/TaskModel";

export interface IGetFormattedChecklistData extends Omit<
  ITaskChecklist,
  "text"
> {
  value: string;
}

export interface ITaskModal {
  onCancelAction: () => void;
  snapPoints: [number, number];
  visible: boolean;
  boardId: string;
  columnId: string;
}

export interface ICreateTask {
  description: string;
  status: any;
  title: string;
  checklist: IGetFormattedChecklistData[];
  enableSoundAlerts?: boolean;
}

