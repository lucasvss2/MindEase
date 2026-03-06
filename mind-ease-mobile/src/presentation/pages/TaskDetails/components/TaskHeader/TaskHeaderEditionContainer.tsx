import { InputField, InputRoot } from "@/presentation/components/Input";
import { View } from "react-native";
import { CreateOrEditActionsButtons } from "../CreateOrEditActionsButtons";
import { ITaskHeaderEditionContainer } from "../../interface";

export const TaskHeaderEditionContainer = ({
  tempValue,
  setTempValue,
  onConfirm,
  onCancel,
  isSaving,
}: ITaskHeaderEditionContainer) => {
  return (
    <View className='flex-1 flex-row items-center gap-2 h-auto'>
      <InputRoot className='flex-1 h-auto'>
        <InputField autoFocus value={tempValue!} onChangeText={setTempValue} />
      </InputRoot>

      <CreateOrEditActionsButtons
        onConfirm={onConfirm}
        onCancel={onCancel}
        isLoading={isSaving}
      />
    </View>
  );
};

