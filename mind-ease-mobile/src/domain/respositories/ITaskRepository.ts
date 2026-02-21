import { UpdateTaskDTO } from "@/data/dtos/task-dto";
import { TaskModel } from "../models/TaskModel";

export interface ITaskRepository {
  getTasks: (boardId?: string) => Promise<TaskModel[]>;
  getTaskById: (id: string) => Promise<TaskModel>;
  updateTask: (id: string, data: UpdateTaskDTO) => Promise<TaskModel>;
  deleteTask: (id: string) => Promise<void>;
}

