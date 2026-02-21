export interface BoardResponseDTO {
  id: string;
  userId: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  color: string;
  tasksCount: number;
  totalHours: number;
}

export interface UpdateBoardDTO {
  name?: string;
  description?: string;
  color?: string;
}

export interface CreateBoardDTO {
  name: string;
  description: string;
  color: string;
}