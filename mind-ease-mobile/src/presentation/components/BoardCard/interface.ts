import { BoardModel } from "@/domain/models/BoardModel";

export interface IBoardCardData {
  id: string;
  title: string;
  taskCount: number;
  totalHours: number;
  color: string;
}

export interface IBoardCardProps {
  board: BoardModel & { color: any };
}

