import { TaskModel } from "@/domain/models/TaskModel";
import { TaskResponseDTO } from "../dtos/task-dto";

export class TaskMapper {
  static toDomain(raw: TaskResponseDTO): TaskModel {
    return {
      id: raw.id,
      userId: raw.userId,
      boardId: raw.boardId,
      title: raw.title,
      description: raw.description,
      status: raw.status,
      dueDate: raw.dueDate,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      board: {
        id: raw.board.id,
        name: raw.board.name,
      },
    };
  }
}

