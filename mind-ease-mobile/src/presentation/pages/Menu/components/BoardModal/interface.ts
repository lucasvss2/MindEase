import { UpdateBoardDTO } from "@/data/dtos/board-dto";

export interface IBoardModalProps {
  name?: string;
  color?: string;
  isEditing?: boolean;
  visible: boolean;
  onCancel: () => void;
  onSubmit: (data: UpdateBoardDTO) => void | Promise<void>;
  snapPoints?: [number, number];
  initialSnapIndex?: 0 | 1;
  isLoading?: boolean;
}

