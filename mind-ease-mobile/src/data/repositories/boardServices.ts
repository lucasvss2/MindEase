import { AppError } from "@/domain/errors/app-error";
import { BoardModel } from "@/domain/models/BoardModel";
import { IBoardRepository } from "@/domain/respositories/IBoardRepository";
import { api } from "@/infrastructure/http/api";
import { CreateBoardDTO, UpdateBoardDTO } from "../dtos/board-dto";
import { BoardMapper } from "../mappers/board-mappers";

export class BoardServices implements IBoardRepository {
  private readonly endpoint = "boards";

  async getBoards(): Promise<BoardModel[]> {
    try {
      const response = await api.get(this.endpoint);
      return response.data.map(BoardMapper.toDomain);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao carregar boards",
        error.response?.status,
      );
    }
  }

  async getBoardById(id: string): Promise<BoardModel> {
    try {
      const response = await api.get(`${this.endpoint}/${id}`);
      return BoardMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Board não encontrado",
        error.response?.status,
      );
    }
  }

  async updateBoard(id: string, data: UpdateBoardDTO): Promise<BoardModel> {
    try {
      const response = await api.put(
        `${this.endpoint}/${id}`,
        JSON.stringify(data),
      );
      return BoardMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao atualizar board",
        error.response?.status,
      );
    }
  }

  async createBoard(data: CreateBoardDTO): Promise<BoardModel> {
    try {
      const response = await api.post(`${this.endpoint}`, JSON.stringify(data));

      return BoardMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao criar board",
        error.response?.status,
      );
    }
  }

  async deleteBoard(id: string): Promise<void> {
    try {
      await api.delete(`${this.endpoint}/${id}`);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao deletar board",
        error.response?.status,
      );
    }
  }
}

