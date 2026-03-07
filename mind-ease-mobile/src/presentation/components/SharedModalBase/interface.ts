export interface ISharedModalBase  {
  labels: { key: string; label: string }[];
  children: React.ReactNode;
  saveText: string;
  disabled?: boolean;
  title: string;
  snapPoints?: [number, number];
  onCancelAction: () => void;
  onSubmitChanges: () => void;
  isLoading?: boolean;
  visible: boolean;
  testId?: string
}

