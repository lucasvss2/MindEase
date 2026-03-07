import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
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
  const scaledLgSpacingSize = useAccessibilityScale<number>(
    TOKENS.SPACING.xs,
    "number",
  );
  
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onToggle}
      className={cn("flex-row items-center")}
      style={{ gap: scaledLgSpacingSize }}
    >
      <Checkbox isChecked={isChecked} />

      <FormFieldLabel>{label}</FormFieldLabel>
    </TouchableOpacity>
  );
};

