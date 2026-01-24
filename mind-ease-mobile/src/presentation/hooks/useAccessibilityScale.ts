import useUserPreferencesStore from '@/presentation/store/useUserPreferencesStore';
import { useMemo } from 'react';
import { TextStyle } from 'react-native';

export const useAccessibilityScale = <TReturn = number | TextStyle>(
  baseValue: number, 
  type = 'font' 
):TReturn => {
  const { fontSizeScale, spacingScale } = useUserPreferencesStore();
  
  return useMemo(() => {
    const isFontScale = type === 'font';
    const scale = isFontScale ? fontSizeScale : spacingScale;
    const scaledValue = baseValue + scale;

    if (isFontScale) {
      return {
        fontSize: scaledValue,
        lineHeight: scaledValue * 1.5,
        letterSpacing: scaledValue * 0.12,
      }  as TextStyle
    }

    console.log({scaledValue, baseValue})

    return scaledValue;

  }, [baseValue, type, fontSizeScale, spacingScale]) as TReturn;
};