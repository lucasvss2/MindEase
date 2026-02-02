import { View } from "react-native";

export const IconTextContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <View className='mb-2 flex-row items-center gap-3'>
      {children   }
    </View>
  );
};

