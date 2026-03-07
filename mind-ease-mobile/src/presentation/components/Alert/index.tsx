import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { Text, TextStyle, View } from "react-native";
import { alertVariants } from "./alert.variants";
import { IAlert } from "./interface";

export const Alert = ({ title, children, type = "info" }: IAlert) => {
  const { contrast, fontType } = useUserPreferencesStore();
  const scaledTitleSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.lg,
  );

  const scaledDescriptionSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.sm,
  );

  const contrastStyle = alertVariants[contrast][type];

  return (
    <View
      className='p-4 rounded-lg gap-2'
      style={{
        backgroundColor: contrastStyle.backgroundColor,
        borderWidth: 2,
        borderColor: contrastStyle.borderColor,
      }}
    >
      <Text
        style={{
          color: contrastStyle.color,
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          fontWeight: 500,
          ...scaledTitleSize,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          color: contrastStyle.color,
          fontFamily: TOKENS.FONT_FAMILY[fontType],
          ...scaledDescriptionSize,
        }}
      >
        {children}
      </Text>
    </View>
  );
};

