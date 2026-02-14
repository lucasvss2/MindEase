import useAuthStore from "@/presentation/store/useAuthStore";
import axios from "axios";
console.log("baseURL: ", process.env.EXPO_PUBLIC_API_URL);

export const api = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "User-Agent": "RN-App-Client",
  },
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

