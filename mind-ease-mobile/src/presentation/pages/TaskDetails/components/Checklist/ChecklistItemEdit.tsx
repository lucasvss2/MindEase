import { InputField, InputRoot } from "@/presentation/components/Input";
import { TOKENS } from "@/presentation/constants";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator, TouchableOpacity, View } from "react-native";
import { IChecklistItemEdit } from "../../interface";

export const ChecklistItemEdit = ({
  value,
  onChange,
  onSave,
  onCancel,
  isSaving,
  index
}: IChecklistItemEdit) => (
  <View className='flex-row items-center gap-2'>
    <InputRoot className='flex-1'>
      <InputField
        autoFocus
        value={value}
        onChangeText={(text) => onChange(text)}
        placeholder='Nome do item'
      />
    </InputRoot>
    <View className='flex-row items-center gap-1'>
      <TouchableOpacity onPress={() => onSave(index)} disabled={isSaving}>
        {isSaving ? (
          <ActivityIndicator size='small' color={TOKENS.COLORS.teal[900]} />
        ) : (
          <MaterialCommunityIcons
            name='check-circle'
            size={32}
            color={TOKENS.COLORS.teal[900]}
          />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onCancel(index)}>
        <MaterialCommunityIcons
          name='close-circle-outline'
          size={32}
          color={TOKENS.COLORS.neutral[500]}
        />
      </TouchableOpacity>
    </View>
  </View>
);

