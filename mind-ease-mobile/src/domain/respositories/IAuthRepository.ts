import { ICreateAccountProps, ISharedAuthProps } from "@/domain/types/auth";
import { UserModel } from "../models/UserModel";

export interface IAuthRepository {
  createAccount: (props: ICreateAccountProps) => Promise<UserModel>;
  signIn: (props: ISharedAuthProps) => Promise<UserModel>;
  signOut: (refreshToken: string) => Promise<void>
}

