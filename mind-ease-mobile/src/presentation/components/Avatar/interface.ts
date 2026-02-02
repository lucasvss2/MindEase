import { ImageSourcePropType } from "react-native";

export interface IAvatarProps {
  imageUri?: string | ImageSourcePropType;
  name?: string;
  size?: number;
  className?: string;
  textClassName?: string;
  onPress?: () => void;
}
