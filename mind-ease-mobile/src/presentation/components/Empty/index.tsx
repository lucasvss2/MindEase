import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { FontAwesome } from "@expo/vector-icons";
import { Text, TextStyle, View } from "react-native";
import { emptyContrast } from "./empty.variant";

export const Empty = ({ message }:{message: string}) => {
  const { contrast, fontType } = useUserPreferencesStore();
  const scaledEmptyText = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["2xl"],
  );

  return (
    <View className='h-[50vh] justify-center items-center gap-4'>
      <Text
        style={[
          scaledEmptyText,
          {
            fontFamily: fontType,
            color: emptyContrast[contrast],
            fontWeight: 500,
          },
        ]}
      >
        {message}
      </Text>
      <FontAwesome
        name='folder-open'
        size={90}
        color={emptyContrast[contrast]}
      />
    </View>
  );
};

