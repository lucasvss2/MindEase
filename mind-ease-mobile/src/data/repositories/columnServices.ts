import { AppError } from "@/domain/errors/app-error";
import { ColumnModel } from "@/domain/models/ColumnModel";
import { IColumnRepository } from "@/domain/respositories/IColumnRepository";
import { api } from "@/infrastructure/http/api";
import {
  ColumnResponseDTO,
  CreateColumnDTO,
  UpdateColumnDTO,
} from "../dtos/column-dto";
import { ColumnMapper } from "../mappers/column-mapper";

export class ColumnServices implements IColumnRepository {
  private readonly endpoint = "columns";

    async getColumnBySlug(slug: string): Promise<ColumnModel> {
    try {
      const response = await api.get(`${this.endpoint}/slug/${slug}`);
      return ColumnMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Coluna não encontrada",
        error.response?.status,
      );
    }
  }

  async getColumnById(id: string): Promise<ColumnModel> {
    try {
      const response = await api.get(`${this.endpoint}/${id}`);
      return ColumnMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Coluna não encontrada",
        error.response?.status,
      );
    }
  }

  async getColumnsByBoardId(boardId: string): Promise<ColumnModel[]> {
    try {
      const { data } = await api.get<ColumnResponseDTO[]>(`${this.endpoint}/board/${boardId}`);

      return ColumnMapper.toDomainList(data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao buscar colunas",
        error.response?.status,
      );
    }
  }

   async getColumns(): Promise<ColumnModel[]> {
    try {
      const { data } = await api.get<ColumnResponseDTO[]>(this.endpoint);

      return ColumnMapper.toDomainList(data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao buscar colunas",
        error.response?.status,
      );
    }
  }

  async createColumn(props: CreateColumnDTO): Promise<ColumnModel> {
    try {
      const { data } = await api.post<ColumnResponseDTO>(this.endpoint, props);
      return ColumnMapper.toDomain(data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao criar coluna",
        error.response?.status,
      );
    }
  }

  async updateColumn(id: string, props: UpdateColumnDTO): Promise<ColumnModel> {
    try {
      const { data } = await api.put<ColumnResponseDTO>(
        `${this.endpoint}/${id}`,
        props,
      );
      return ColumnMapper.toDomain(data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao atualizar coluna",
        error.response?.status,
      );
    }
  }

  async deleteColumn(id: string): Promise<void> {
    try {
      await api.delete(`${this.endpoint}/${id}`);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao deletar coluna",
        error.response?.status,
      );
    }
  }
}

