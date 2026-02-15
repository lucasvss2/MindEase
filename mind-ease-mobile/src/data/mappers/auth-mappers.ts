import { AuthResponseDTO } from "@/data/dtos/auth-dto";
import { UserModel } from "@/domain/models/UserModel";

export class AuthMapper {
  static toDomain(raw: AuthResponseDTO): UserModel {
    return {
      user: {
        id: raw.user.id,
        name: raw.user.name,
        email: raw.user.email,
      },
      accessToken: raw.accessToken,
      refreshToken: raw.refreshToken
    };
  }
}

