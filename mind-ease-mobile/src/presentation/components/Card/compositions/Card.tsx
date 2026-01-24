import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { cn } from "@/utils/twClassnamesResolver";
import { TextStyle, View } from "react-native";
import { ICardsSharedProps } from "../interface";

export const Card: React.FC<ICardsSharedProps> = ({
  children,
  className = "",
}) => {
  const scaledPadding = useAccessibilityScale<number>(24, "number");
  const scaledGap = useAccessibilityScale<number>(8, "number");

  return (
    <View
      className={cn(
        "flex flex-col rounded-lg shadow-sm bg-neutral-0 border-neutral-300",
        className,
      )}
      style={{ padding: scaledPadding, gap: scaledGap }}
    >
      {children}
    </View>
  );
};

