import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { Text, TextStyle } from "react-native";

export const CardTitle = ({ title }: { title: string }) => {
  const { fontType } = useUserPreferencesStore();
  const scaledTitleFontSpacing = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["2xl"],
  );

  return (
    <Text
      className='text-neutral-1000 font-semibold'
      style={[
        scaledTitleFontSpacing,
        { fontFamily: TOKENS.FONT_FAMILY[fontType] },
      ]}
    >
      {title}
    </Text>
  );
};

