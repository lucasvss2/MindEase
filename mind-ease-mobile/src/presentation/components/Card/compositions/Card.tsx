import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle, View } from "react-native";
import { ICardProps } from "../interface";

export const Card: React.FC<ICardProps> = ({
  title,
  children,
  className = "",
}) => {
  const scaledTitleFontSpacing = useAccessibilityScale<TextStyle>(24);
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
      <Text
        className='text-neutral-1000 font-lexend-semi-bold'
        style={[scaledTitleFontSpacing]}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

