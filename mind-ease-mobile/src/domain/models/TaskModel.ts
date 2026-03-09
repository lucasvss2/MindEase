export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export interface ITaskChecklist {
  id: string;
  text: string;
  isConcluded: boolean;
}
export interface TaskModel {
  id: string;
  userId: string;
  columnId: string;
  boardId: string;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  hours: number;
  createdAt: string;
  updatedAt: string;
  column: {
    id: string;
    name: string;
    slug: string;
    board: {
      id: string;
      name: string;
      color: string;
    };
  };
  checklist?: ITaskChecklist[];
  isConcluded?: boolean;
  enableSoundAlerts?: boolean;
  focusMinutes?: number;
  shortBreakMinutes?: number;
}

