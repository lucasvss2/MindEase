import { ITaskChecklist } from "@/domain/models/TaskModel";

export interface IGetFormattedChecklistData extends Omit<
  ITaskChecklist,
  "text"
> {
  value: string;
}

