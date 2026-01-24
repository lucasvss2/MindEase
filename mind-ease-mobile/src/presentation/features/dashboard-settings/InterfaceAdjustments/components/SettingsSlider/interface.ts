import { SliderProps } from "@react-native-community/slider";

export interface ISettingsSlider extends SliderProps {
  icon?: React.ReactNode;
  title: string;
  value: number;
  onIncrese: (newValue: number) => void;
  onDecrease: (newValue: number) => void;
}

