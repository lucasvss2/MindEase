import { ButtonGroup } from "@/presentation/components/ButtonGroup";
import { Card } from "@/presentation/components/Card";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { useMemo } from "react";
import { View } from "react-native";
import { SectionTitle } from "../InterfaceAdjustments/components/SectionTitle";

export const ComplexityLevel = () => {
  const { complexityLevel, updateComplexityLevel } = useUserPreferencesStore();

  const buttonsOptions = useMemo(
    () => [
      {
        text: "Baixa",
        conditional: complexityLevel === "low",
        onPress: () => updateComplexityLevel("low"),
        size: "sm",
      },
      {
        text: "Média",
        conditional: complexityLevel === "medium",
        onPress: () => updateComplexityLevel("medium"),
        size: "sm",
      },
      {
        text: "Alta",
        conditional: complexityLevel === "high",
        onPress: () => updateComplexityLevel("high"),
        size: "sm",
      },
    ],
    [complexityLevel, updateComplexityLevel],
  );

  return (
    <View className='mb-10 gap-4 '>
      <SectionTitle>Nível de Complexidade</SectionTitle>
      <Card>
        <ButtonGroup buttons={buttonsOptions} />
      </Card>
    </View>
  );
};

