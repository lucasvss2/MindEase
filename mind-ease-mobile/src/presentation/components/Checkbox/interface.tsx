export interface ICheckboxSharedProps {
  isChecked?: boolean;
}

export interface ICheckboxFieldProps extends ICheckboxSharedProps {
  onToggle: () => void;
  label: string;
}

