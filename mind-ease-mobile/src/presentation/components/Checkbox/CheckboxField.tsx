import { cn } from "@/utils/twClassnamesResolver";
import { TouchableOpacity } from "react-native";
import Checkbox from ".";
import { FormFieldLabel } from "../FormField";
import { ICheckboxFieldProps } from "./interface";

export const CheckboxField = ({
  onToggle,
  label,
  isChecked,
}: ICheckboxFieldProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onToggle}
      className={cn("flex-row items-center gap-2")}
    >
      <Checkbox isChecked={isChecked} />

      <FormFieldLabel>{label}</FormFieldLabel>
    </TouchableOpacity>
  );
};

