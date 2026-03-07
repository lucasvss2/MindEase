import { UserInfosModel } from "@/domain/models/UserInfosModel";
import { UserInfosResponseDTO } from "../dtos/user-infos-dto";

export class UserInfosMapper {
  static toDomain(raw: UserInfosResponseDTO): UserInfosModel {
    return {
      id: raw.id,
      name: raw.name,
      email: raw.email,
      createdAt: raw.createdAt,
    };
  }
}

