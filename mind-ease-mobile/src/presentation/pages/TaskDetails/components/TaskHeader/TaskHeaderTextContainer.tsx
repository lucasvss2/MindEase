import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { ITaskHeaderTextContainer } from "../../interface";

export const TaskHeaderTextContainer = ({
  text,
  scaledText,
  onPress,
}: ITaskHeaderTextContainer) => {
  const { fontType } = useUserPreferencesStore();
  const scaledIconSize = useAccessibilityScale<number>(
    TOKENS.SIZE["2xs"],
    "number",
  );

  return (
    <View className='flex-row justify-between items-center'>
      <Text
        className='text-neutral-1000 break-words w-8/12'
        style={[{ fontFamily: TOKENS.FONT_FAMILY[fontType] }, scaledText]}
      >
        {text}
      </Text>

      {text && (
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name='pencil' size={scaledIconSize} />
        </TouchableOpacity>
      )}
    </View>
  );
};

