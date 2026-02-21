export interface ColumnResponseDTO {
  id: string;
  userId: string;
  boardId: string;
  name: string;
  slug: string;
  tasksCount: number;
  createdAt: string;
  updatedAt: string;
  board: {
    id: string;
    name: string;
    color: string;
  };
}

export interface CreateColumnDTO {
  boardId: string;
  name: string;
}

export interface UpdateColumnDTO extends Partial<CreateColumnDTO>{}