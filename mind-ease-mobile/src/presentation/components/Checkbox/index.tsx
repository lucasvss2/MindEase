import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { checkboxThemeStyles } from "./checkbox.variants";
import { ICheckboxSharedProps } from "./interface";

const Checkbox = ({ isChecked = false }: ICheckboxSharedProps) => {
  const { contrast } = useUserPreferencesStore();
  const scaledSize = useAccessibilityScale<number>(
    TOKENS.SIZE["3xs"],
    "number",
  );

  const currentTheme = checkboxThemeStyles["low"];

  return (
    <View
      className={cn(
        "ml-1 rounded-md justify-center items-center",
        !isChecked && "border-2",
      )}
      style={[
        {
          width: scaledSize,
          height: scaledSize,
          borderColor: currentTheme.border,
          backgroundColor: isChecked ? currentTheme.activeBg : "transparent",
        },
      ]}
    >
      {isChecked && (
        <Ionicons
          name='checkmark'
          size={scaledSize * 0.7}
          color={
            contrast === "low"
              ? TOKENS.COLORS.blue[925]
              : TOKENS.COLORS.neutral[0]
          }
        />
      )}
    </View>
  );
};

export default Checkbox;

