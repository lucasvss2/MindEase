import { UpdateBoardDTO } from "@/data/dtos/board-dto";
import { BoardModel } from "../models/BoardModel";

export interface IBoardRepository {
  getBoards: () => Promise<BoardModel[]>;
  getBoardById: (id: string) => Promise<BoardModel>;
  updateBoard: (id: string, data: UpdateBoardDTO) => Promise<BoardModel>;
  deleteBoard: (id: string) => Promise<void>;
}

