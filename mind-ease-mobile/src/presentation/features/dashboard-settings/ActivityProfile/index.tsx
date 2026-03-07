import { ButtonGroup } from "@/presentation/components/ButtonGroup";
import { Card } from "@/presentation/components/Card";
import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { FontAwesome6 } from "@expo/vector-icons";
import { useMemo } from "react";
import { TextStyle, View } from "react-native";
import { SectionTitle } from "../InterfaceAdjustments/components/SectionTitle";

export const ActivityProfile = () => {
  const { activityProfile, updateActivityProfile } = useUserPreferencesStore();
  const scaledGap = useAccessibilityScale<number>(16, "number");
  const scaledIconSize = useAccessibilityScale<TextStyle>(20).fontSize;

  const scaledMdSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["md"],
    "number",
  );

  const scaled3xlSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["3xl"],
    "number",
  );

  const buttons = useMemo(
    () => [
      {
        text: "Trabalho",
        value: "work",
        conditional: activityProfile === "work",
        onPress: () => updateActivityProfile("work"),
      },
      {
        text: "Estudo",
        value: "study",
        conditional: activityProfile === "study",
        onPress: () => updateActivityProfile("study"),
      },
    ],
    [activityProfile, updateActivityProfile],
  );

  return (
    <View style={{ gap: scaledMdSpacing, marginTop: scaled3xlSpacing }}>
      <View className='flex flex-row items-center' style={{ gap: scaledGap }}>
        <FontAwesome6 name='user' size={scaledIconSize} color='black' />

        <SectionTitle>Perfil de atividade</SectionTitle>
      </View>

      <Card>
        <ButtonGroup buttons={buttons} />
      </Card>
    </View>
  );
};

