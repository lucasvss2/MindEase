import { AuthServices } from "@/data/repositories/authServices";
import { useMutation } from "@tanstack/react-query";

const AuthService = new AuthServices();

export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: AuthService.createAccount,
  });
};

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: AuthService.signIn,
  });
};

export const useSignOutMutation = () => {
  return useMutation({
    mutationFn: AuthService.signOut,
  });
};

