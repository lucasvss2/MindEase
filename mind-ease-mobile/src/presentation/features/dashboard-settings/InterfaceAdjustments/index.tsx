import { ButtonGroup } from "@/presentation/components/ButtonGroup";
import { IButtonGroupProps } from "@/presentation/components/ButtonGroup/interface";
import { Card } from "@/presentation/components/Card";
import { FormFieldLabel } from "@/presentation/components/FormField";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import {
  FontAwesome,
  FontAwesome6,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useMemo } from "react";
import { View } from "react-native";
import { IconTextContainer } from "./components/IconTextContainer";
import { SectionTitle } from "./components/SectionTitle";
import { SettingsSlider } from "./components/SettingsSlider";

export const InterfaceAdjustments = () => {
  const {
    updateFontSizeScale,
    spacingScale,
    updateSpacingScale,
    fontSizeScale,
    contrast,
    updateContrast,
    fontType,
    updateFontType,
  } = useUserPreferencesStore();

  const contrastOptionsButtons: IButtonGroupProps["buttons"] = useMemo(
    () => [
      {
        text: "Suave",
        conditional: contrast === "soft",
        onPress: () => updateContrast("soft"),
        size: "sm",
      },
      {
        text: "Padrão",
        conditional: contrast === "standard",
        onPress: () => updateContrast("standard"),
        size: "sm",
      },
      {
        text: "Alto",
        conditional: contrast === "high",
        onPress: () => updateContrast("high"),
        size: "sm",
      },
    ],
    [contrast, updateContrast],
  );

  const fontOptionsButtons: IButtonGroupProps["buttons"] = useMemo(
    () => [
      {
        text: "Sans",
        conditional: fontType === "sans",
        onPress: () => updateFontType("sans"),
        size: "sm",
      },
      {
        text: "Serif",
        conditional: fontType === "serif",
        onPress: () => updateFontType("serif"),
        size: "sm",
      },
      {
        text: "Mono",
        conditional: fontType === "mono",
        onPress: () => updateFontType("mono"),
        size: "sm",
      },
    ],
    [fontType, updateFontType],
  );

  return (
    <View className='gap-4 my-10'>
      <View className='flex flex-row items-center gap-4'>
        <SectionTitle>Ajustes de interface</SectionTitle>
      </View>

      <Card className='gap-8 justify-between'>
        <SettingsSlider
          title='Tamanho da fonte'
          maximumValue={6}
          value={fontSizeScale}
          onIncrese={() => {
            updateFontSizeScale(fontSizeScale + 1);
          }}
          onDecrease={() => {
            updateFontSizeScale(fontSizeScale - 1);
          }}
        />

        <View>
          <IconTextContainer>
            <Fontisto name='font' size={14} />
            <FormFieldLabel>Tipo de fonte</FormFieldLabel>
          </IconTextContainer>

          <ButtonGroup buttons={fontOptionsButtons} />
        </View>

        <SettingsSlider
          title='Espaçamento'
          value={spacingScale}
          onIncrese={() => updateSpacingScale(spacingScale + 1)}
          onDecrease={() => updateSpacingScale(spacingScale - 1)}
          icon={<FontAwesome6 name='compress' size={16} />}
        />

        <View>
          <IconTextContainer>
            <FontAwesome name='eye' size={20} />
            <FormFieldLabel>Contraste</FormFieldLabel>
          </IconTextContainer>

          <ButtonGroup buttons={contrastOptionsButtons} />
        </View>

        <SettingsSlider
          title='Velocidade de animação'
          value={spacingScale}
          onIncrese={() => {}}
          onDecrease={() => {}}
          icon={<MaterialCommunityIcons name='speedometer' size={22} />}
        />
      </Card>
    </View>
  );
};

