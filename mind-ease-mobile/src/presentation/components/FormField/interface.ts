export type FormFieldVariant = "default" | "error";
export interface IFormFieldSharedProps {
  children: React.ReactNode;
  variant?: FormFieldVariant;
}
export interface IFormFieldProps extends IFormFieldSharedProps {
  label?: string;
  message?: string;
}

