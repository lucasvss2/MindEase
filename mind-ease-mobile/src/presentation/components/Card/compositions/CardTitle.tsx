import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { Text, TextStyle } from "react-native";

export const CardTitle = ({ title }: { title: string }) => {
  const scaledTitleFontSpacing = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE['2xl']);

  return (
    <Text
      className='text-neutral-1000 font-lexend-semi-bold'
      style={[scaledTitleFontSpacing]}
    >
      {title}
    </Text>
  );
};

