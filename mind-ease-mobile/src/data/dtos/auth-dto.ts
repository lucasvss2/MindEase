export interface AuthResponseDTO {
  user: {
    id: string;
    name: string;
    email: string;
    createdAt: string;
  };
  accessToken: string;
  refreshToken: string;
}