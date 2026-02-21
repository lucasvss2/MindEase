import { ColumnModel } from "@/domain/models/ColumnModel";
import { ColumnResponseDTO } from "../dtos/column-dto";

export class ColumnMapper {
  static toDomain(raw: ColumnResponseDTO): ColumnModel {
    return {
      id: raw.id,
      name: raw.name,
      slug: raw.slug,
      tasksCount: raw.tasksCount,
      boardName: raw.board.name, // Extraindo dado aninhado
    };
  }

  static toDomainList(list: ColumnResponseDTO[]): ColumnModel[] {
    return list.map(item => this.toDomain(item));
  }
}