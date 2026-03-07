import { InputField, InputRoot } from "@/presentation/components/Input";
import { TOKENS } from "@/presentation/constants";
import { useUpdateTaskMutation } from "@/presentation/features/Tasks/tasks-queries";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import handleError from "@/utils/helpers/handleError";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Toast } from "toastify-react-native";
import { ICreateOrEditField } from "../interface";
import { CreateOrEditActionsButtons } from "./CreateOrEditActionsButtons";

export const CreateOrEditField = ({
  scaledTextBase,
  isSaving,
  task,
}: ICreateOrEditField) => {
  const [editingField, setEditingField] = useState<string | null>();
  const [tempValue, setTempValue] = useState<string | null>();
  const { fontType } = useUserPreferencesStore();
  const { mutateAsync: updateTaskMutation } = useUpdateTaskMutation();

  const onUpdateHeader = useCallback(
    async (field: "title" | "description", value: string) => {
      try {
        const updatedTask = {
          ...task,
          [field]: value,
        };

        await updateTaskMutation({
          id: task?.id,
          data: updatedTask,
        });

        Toast.success(
          `${field === "title" ? "Título" : "Descrição"} atualizado!`,
        );
      } catch (error) {
        handleError(error, Toast.error);
      }
    },
    [task, updateTaskMutation],
  );

  const handleCancel = useCallback(() => {
    setEditingField(null);
    setTempValue("");
  }, []);

  return (
    <View className='flex-row items-start justify-between min-h-[40px]'>
      {editingField === "description" ? (
        <View className='flex-1 flex-row items-center gap-2'>
          <InputRoot className='flex-1'>
            <InputField
              autoFocus
              multiline
              value={tempValue!}
              onChangeText={setTempValue}
              style={[{ fontFamily: fontType }, scaledTextBase]}
            />
          </InputRoot>
          <CreateOrEditActionsButtons
            onConfirm={onUpdateHeader}
            onCancel={handleCancel}
            isLoading={isSaving}
          />
        </View>
      ) : (
        <>
          <Text
            className='text-neutral-600 flex-1'
            style={[{ fontFamily: fontType }, scaledTextBase]}
          >
            {task?.description}
          </Text>
          <TouchableOpacity
            onPress={() => onUpdateHeader("description", task?.description)}
            className='ml-2 mt-1'
          >
            <MaterialCommunityIcons
              name='pencil-outline'
              size={22}
              color={TOKENS.COLORS.neutral[600]}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

