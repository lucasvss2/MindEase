import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { Text, TextStyle } from "react-native";

export const CardTitle = ({ title }: { title: string }) => {
  const scaledTitleFontSpacing = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["xl"],
  );
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType } = activeProfileId === "study" ? study : work;
  
  return (
    <Text
      className='text-neutral-1000'
      style={[
        scaledTitleFontSpacing,
        { fontFamily: TOKENS.FONT_FAMILY[fontType] },
      ]}
    >
      {title}
    </Text>
  );
};

