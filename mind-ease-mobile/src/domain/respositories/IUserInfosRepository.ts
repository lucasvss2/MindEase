import { UserInfosModel } from "../models/UserInfosModel";

export interface IUserInfosRepository {
  getInfos: () => Promise<UserInfosModel>;
}

