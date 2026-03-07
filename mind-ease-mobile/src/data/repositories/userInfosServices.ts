import { AppError } from "@/domain/errors/app-error";
import { UserInfosModel } from "@/domain/models/UserInfosModel";
import { IUserInfosRepository } from "@/domain/respositories/IUserInfosRepository";
import { api } from "@/infrastructure/http/api";
import { UserInfosMapper } from "../mappers/user-infos-mappers";

export class UserInfosServices implements IUserInfosRepository {
  async getInfos(): Promise<UserInfosModel> {
    try {
      const response = await api.get("me");
      return UserInfosMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(
        error.response?.data?.error ||
          "Erro ao carregar informações do usuário",
        error.response?.status,
      );
    }
  }
}

