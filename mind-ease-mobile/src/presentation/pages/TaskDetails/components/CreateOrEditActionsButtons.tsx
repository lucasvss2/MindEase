import { TOKENS } from "@/presentation/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { ICreateOrEditActionsButtons } from "../interface";

export const CreateOrEditActionsButtons = ({
  onConfirm,
  onCancel,
  isLoading,
}: ICreateOrEditActionsButtons) => (
  <View className='flex-row items-center gap-1'>
    <TouchableOpacity onPress={onConfirm} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator size='small' color={TOKENS.COLORS.teal[900]} />
      ) : (
        <MaterialCommunityIcons
          name='check-circle'
          size={28}
          color={TOKENS.COLORS.teal[900]}
        />
      )}
    </TouchableOpacity>
    <TouchableOpacity onPress={onCancel} disabled={isLoading}>
      <MaterialCommunityIcons
        name='close-circle-outline'
        size={28}
        color={TOKENS.COLORS.red[500]}
      />
    </TouchableOpacity>
  </View>
);

