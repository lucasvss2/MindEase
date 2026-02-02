import { View, TouchableOpacity, useWindowDimensions, ViewStyle } from "react-native";
import { TOKENS } from "@/presentation/constants/tokens";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { lightenHex } from "@/utils/colorUtils";
import { cn } from "@/utils/twClassnamesResolver";

const COLUMNS = 4;

export interface ColorPickerProps {
  colors: string[];
  selectedColor: string;
  onSelectColor: (color: string) => void;
  contentPaddingH?: number;
  columns?: number;
  className?: string;
  style?: ViewStyle;
}

export function ColorPicker({
  colors,
  selectedColor,
  onSelectColor,
  contentPaddingH = 60,
  columns = COLUMNS,
  className,
  style,
}: ColorPickerProps) {
  const { width: windowWidth } = useWindowDimensions();
  const gap = TOKENS.SPACING.sm;
  const marginBottom = TOKENS.SPACING["2xl"];
  const colorSize =
    (windowWidth - contentPaddingH - gap * (columns - 1)) / columns;

  return (
    <View
      className={cn("flex-row flex-wrap", className)}
      style={[
        {
          gap,
          marginBottom,
        },
        style,
      ]}
    >
      {colors.map((color) => {
        const isSelected = selectedColor === color;
        return (
          <TouchableOpacity
            key={color}
            activeOpacity={0.7}
            onPress={() => onSelectColor(color)}
            className="items-center justify-center rounded-lg border-2"
            style={{
              width: colorSize,
              height: colorSize,
              backgroundColor: lightenHex(color, 0.55),
              borderColor: isSelected
                ? THEME_COLORS.blue[400]
                : THEME_COLORS.neutral[200],
            }}
          >
            {isSelected && (
              <View
                className="rounded-full"
                style={{
                  width: Math.min(14, colorSize * 0.4),
                  height: Math.min(14, colorSize * 0.4),
                  borderRadius: Math.min(7, colorSize * 0.2),
                  backgroundColor: color,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
