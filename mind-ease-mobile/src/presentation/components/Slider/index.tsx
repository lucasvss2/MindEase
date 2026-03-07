import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import SliderCommunity, { SliderProps } from "@react-native-community/slider";

export const Slider: React.FC<SliderProps> = (props) => {
  const { contrast } = useUserPreferencesStore();
  const scaled3xlSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["3xl"],
    "number",
  );

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
      style={{ padding: scaled3xlSpacing }}
      {...props}
    />
  );
};

