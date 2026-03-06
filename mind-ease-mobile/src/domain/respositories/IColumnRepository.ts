import { ColumnModel } from "../models/ColumnModel";
import { CreateColumnDTO, UpdateColumnDTO } from "../../data/dtos/column-dto";

export interface IColumnRepository {
  getColumns: () => Promise<ColumnModel[]>;
  getColumnById: (id: string) => Promise<ColumnModel>;
  getColumnBySlug: (slug: string) => Promise<ColumnModel>;
  getColumnsByBoardId:  (boardId: string) => Promise<ColumnModel[]>;
  createColumn: (data: CreateColumnDTO) => Promise<ColumnModel>;
  updateColumn: (id: string, data: UpdateColumnDTO) => Promise<ColumnModel>;
  deleteColumn: (id: string) => Promise<void>;
}

