import { TaskModel } from "@/domain/models/TaskModel";
import { TaskResponseDTO } from "../dtos/task-dto";

export class TaskMapper {
  static toDomain(raw: TaskResponseDTO): TaskModel {
    return {
      id: raw.id,
      userId: raw.userId,
      columnId: raw.columnId,
      title: raw.title,
      description: raw.description,
      status: raw.status,
      dueDate: raw.dueDate,
      hours: raw.hours,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,

      column: {
        id: raw.column.id,
        name: raw.column.name,
        slug: raw.column.slug,
        board: {
          id: raw.column.board.id,
          name: raw.column.board.name,
          color: raw.column.board.color,
        },
      },
    };
  }
}

