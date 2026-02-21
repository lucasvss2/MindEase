import { TaskStatus } from "@/domain/models/TaskModel";

export interface TaskResponseDTO {
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

export interface CreateTaskDTO {
  columnId: string;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
  hours: number;
}

export interface UpdateTaskDTO
  extends Partial<Omit<CreateTaskDTO, "columnId">> {
  columnId: string;
}

