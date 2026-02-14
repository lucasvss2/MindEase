import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { Text, TextStyle } from "react-native";

export const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const scaledTitleFontSpacing = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.lg,
  );
  const { fontType } = useUserPreferencesStore();

  return (
    <Text
      className='font-lexend-semi-bold text-neutral-900 flex-shrink'
      style={[
        scaledTitleFontSpacing,
        { fontFamily: TOKENS.FONT_FAMILY[fontType] },
      ]}
    >
      {children}
    </Text>
  );
};

