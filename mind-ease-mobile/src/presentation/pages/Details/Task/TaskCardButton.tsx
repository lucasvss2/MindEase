import { Card } from "@/presentation/components";
import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";
import { ITaskCardButton } from "./interface";

export const TaskCardButton = ({ task }: ITaskCardButton) => {
  const { fontType } = useUserPreferencesStore();
  const scaled2xsSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );
  const scaledXsFontSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["xs"],
  );

  const scaledSmFontSize = useAccessibilityScale<TextStyle>(
    TOKENS.SPACING["sm"],
  );

  const fontFamily = TOKENS.FONT_FAMILY[fontType];

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
      <Card className={cn("bg-neutral-0 border border-neutral-200")}>
        <View style={{ gap: scaled2xsSpacing }}>
          <Text
            className=' text-neutral-1000'
            style={[{ fontFamily, fontWeight: 700 }, scaledSmFontSize]}
          >
            {task.title}
          </Text>
          <Text
            className=' text-neutral-600'
            style={[{ fontFamily }, scaledXsFontSize]}
          >
            {task.description}
          </Text>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

