import { AppError } from "@/domain/errors/app-error";
import { UserModel } from "@/domain/models/UserModel";
import { IAuthRepository } from "@/domain/respositories/IAuthRepository";
import { ICreateAccountProps, ISharedAuthProps } from "@/domain/types/auth";
import { api } from "@/infrastructure/http/api";
import { AuthMapper } from "../mappers/auth-mappers";

export class AuthServices implements IAuthRepository {
  async createAccount({
    email,
    fullname,
    password,
  }: ICreateAccountProps): Promise<UserModel> {
    try {
      const response = await api.post(
        `${process.env.EXPO_PUBLIC_API_URL}auth/register`,
        JSON.stringify({
          name: fullname,
          email,
          password,
        }),
      );
      return AuthMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(error.response.data.error, error.response.status);
    }
  }

  async signIn(props: ISharedAuthProps): Promise<UserModel> {
    try {
      const response = await api.post(
        `${process.env.EXPO_PUBLIC_API_URL}auth/login`,
        JSON.stringify(props),
      );
      return AuthMapper.toDomain(response.data);
    } catch (error: any) {
      throw new AppError(error.response.data.error, error.response.status);
    }
  }

  async signOut(refreshToken: string): Promise<void> {
    try {
      await api.post(
        `${process.env.EXPO_PUBLIC_API_URL}auth/logout`,
        JSON.stringify({ refreshToken }),
      );
    } catch (error: any) {
      throw new AppError(error.response.data.error, error.response.status);
    }
  }
}

