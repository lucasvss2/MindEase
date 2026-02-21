import { AppError } from "@/domain/errors/app-error";
import { TaskModel } from "@/domain/models/TaskModel";
import { ITaskRepository } from "@/domain/respositories/ITaskRepository";
import { api } from "@/infrastructure/http/api";
import {
  CreateTaskDTO,
  TaskResponseDTO,
  UpdateTaskDTO,
} from "../dtos/task-dto";
import { TaskMapper } from "../mappers/task-mappers";

export class TaskServices implements ITaskRepository {
  private readonly endpoint = "tasks";

  async createTask(props: CreateTaskDTO): Promise<TaskModel> {
    try {
      const { data } = await api.post<TaskResponseDTO>(this.endpoint, props);
      return TaskMapper.toDomain(data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao criar coluna",
        error.response?.status,
      );
    }
  }

  async getTasks(): Promise<TaskModel[]> {
    try {
      const response = await api.get(this.endpoint);
      return response.data.map(TaskMapper.toDomain);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao carregar tasks",
        error.response?.status,
      );
    }
  }

  async getTaskById(id: string): Promise<TaskModel> {
    try {
      const response = await api.get(`${this.endpoint}/${id}`);

      return TaskMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Task não encontrada",
        error.response?.status,
      );
    }
  }

  async updateTask(id: string, data: UpdateTaskDTO): Promise<TaskModel> {
    try {
      const response = await api.put(
        `${this.endpoint}/${id}`,
        JSON.stringify(data),
      );
      return TaskMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao atualizar task",
        error.response?.status,
      );
    }
  }

  async deleteTask(id: string): Promise<void> {
    try {
      await api.delete(`${this.endpoint}/${id}`);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error || "Erro ao deletar task",
        error.response?.status,
      );
    }
  }
}

