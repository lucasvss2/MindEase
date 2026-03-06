import { UserInfosServices } from "@/data/repositories/userInfosServices";
import { useQuery } from "@tanstack/react-query";

const userInfosServices = new UserInfosServices();

export const useGetUserInfos = () => {
  return useQuery({
    queryKey: ["user-infos"],
    queryFn: () => userInfosServices.getInfos(),
  });
};

