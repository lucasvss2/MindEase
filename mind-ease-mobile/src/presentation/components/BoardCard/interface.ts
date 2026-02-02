export interface IBoardCardData {
  id: string;
  title: string;
  taskCount: number;
  hours: number;
  minutes: number;
  color: string;
}

export interface IBoardCardProps {
  board: IBoardCardData;
  onPress?: () => void;
}
