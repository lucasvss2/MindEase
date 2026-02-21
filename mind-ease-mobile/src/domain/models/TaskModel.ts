export type TaskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export interface TaskModel {
  id: string;
  userId: string;
  columnId: string;
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
}

