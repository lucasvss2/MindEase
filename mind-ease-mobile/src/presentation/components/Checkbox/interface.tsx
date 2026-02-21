export interface ICheckboxSharedProps {
  isChecked?: boolean;
}

export interface ICheckboxFieldProps extends ICheckboxSharedProps {
  id: string;
  onToggle: (id: string) => void;
  label: string;
}

