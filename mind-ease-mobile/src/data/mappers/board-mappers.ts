import { BoardModel } from "@/domain/models/BoardModel";
import { BoardResponseDTO } from "../dtos/board-dto";

export class BoardMapper {
  static toDomain(raw: BoardResponseDTO): BoardModel {
    return {
      id: raw.id,
      userId: raw.userId,
      name: raw.name,
      description: raw.description,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
      color: raw.color,
      tasksCount: raw.tasksCount,
      totalHours: raw.totalHours,
    };
  }
}

