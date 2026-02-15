import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { FontAwesome } from "@expo/vector-icons";
import { formColorByContrast } from "../../FormField/form-field.variants";
import { IInputIcon } from "../interface";

export const InputIcon = ({
  name,
  size =  TOKENS.FONT_SIZE.base,
  variant = "default",
}: IInputIcon) => {
  const { contrast } = useUserPreferencesStore();
  const scaledIconSize = useAccessibilityScale<number>(
   size,
    "number",
  );

  return (
    <FontAwesome
      name={name}
      size={scaledIconSize}
      color={formColorByContrast[contrast][variant]}
    />
  );
};

