import { TOKENS } from "@/presentation/constants";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import SliderCommunity, { SliderProps } from "@react-native-community/slider";

export const Slider: React.FC<SliderProps> = (props) => {
  const { contrast } = useUserPreferencesStore();

  const styleByContrast = {
    low: {
      minimumTrackTintColor: TOKENS.COLORS.blue[750],
      thumbTintColor: TOKENS.COLORS.blue[750],
    },
    moderate: {
      minimumTrackTintColor: TOKENS.COLORS.blue[725],
      thumbTintColor: TOKENS.COLORS.blue[725],
    },
    high: {
      minimumTrackTintColor: TOKENS.COLORS.blue[900],
      thumbTintColor: TOKENS.COLORS.blue[900],
    },
  };

  return (
    <SliderCommunity
      {...styleByContrast[contrast]}
      maximumTrackTintColor={TOKENS.COLORS.neutral[350]}
      className='p-10'
      {...props}
    />
  );
};

