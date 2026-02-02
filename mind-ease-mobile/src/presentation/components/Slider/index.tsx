import SliderCommunity, { SliderProps } from "@react-native-community/slider";

export const Slider: React.FC<SliderProps> = (props) => {
  return (
    <SliderCommunity
      minimumTrackTintColor='#0091ffe9'
      maximumTrackTintColor='#8A8585'
      thumbTintColor='#008FFF'
      {...props}
    />
  );
};

