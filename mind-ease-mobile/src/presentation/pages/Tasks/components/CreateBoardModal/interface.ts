export interface ICreateBoardPayload {
  title: string;
  color: string;
}

export interface ICreateBoardModalProps {
  visible: boolean;
  onClose: () => void;
  onCreate: (params: ICreateBoardPayload) => void;
  snapPoints?: [number, number];
  initialSnapIndex?: 0 | 1;
}
