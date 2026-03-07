import { FormFieldLabel } from "@/presentation/components/FormField";
import { Slider } from "@/presentation/components/Slider";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { useCallback, useRef } from "react";
import { Text, TextStyle, View } from "react-native";
import { IconTextContainer } from "../IconTextContainer";
import { ISettingsSlider } from "./interface";

export const SettingsSlider = ({
  title,
  value,
  onIncrese,
  onDecrease,
  step = 1,
  minimumValue = 1,
  maximumValue = 10,
  icon,
  ...props
}: ISettingsSlider) => {
  const scaledTitleFontSpacing = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );
  const { activeProfileId, study, work } = useUserPreferencesStore();
  const { fontType } = activeProfileId === "study" ? study : work;
  
  const lastValue = useRef<number>(1);

  const onValueChange = useCallback(
    (newValue: number) => {
      const currentVal = Math.floor(newValue);
      const previousVal = Math.floor(lastValue.current);

      if (currentVal > previousVal) {
        onIncrese(newValue);
      } else if (currentVal < previousVal) {
        onDecrease(newValue);
      }

      lastValue.current = newValue;
    },
    [onDecrease, onIncrese],
  );

  return (
    <View>
      <View className='flex-row gap-1 flex-wrap justify-between items-center'>
        <IconTextContainer>
          {icon && icon}

          <FormFieldLabel>{title}</FormFieldLabel>
        </IconTextContainer>

        <View className='flex-row justify-between'>
          <Text
            className='self-end text-blue-600'
            style={[
              scaledTitleFontSpacing,
              { fontFamily: TOKENS.FONT_FAMILY[fontType], fontWeight: 700 },
            ]}
          >
            {value.toFixed(2)}
          </Text>
        </View>
      </View>

      <Slider
        style={{ width: 300 }}
        step={step}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        onValueChange={onValueChange}
        value={value}
        {...props}
      />
    </View>
  );
};

