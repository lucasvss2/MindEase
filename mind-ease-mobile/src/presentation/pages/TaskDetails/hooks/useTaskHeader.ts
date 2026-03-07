import { useUpdateTaskMutation } from "@/presentation/features/Tasks/tasks-queries";
import handleError from "@/utils/helpers/handleError";
import { useState } from "react";
import { Toast } from "toastify-react-native";
import { ITaskSharedProps } from "../interface";

export function useTaskHeader({ task }: ITaskSharedProps) {
  const [editingField, setEditingField] = useState<
    "title" | "description" | null
  >(null);
  const [tempValue, setTempValue] = useState("");
  const { mutateAsync: mutateAsyncTask, isPending } = useUpdateTaskMutation();

  const onEdit = (field: "title" | "description", initialValue: string) => {
    setEditingField(field);
    setTempValue(initialValue);
  };

  const onCancel = () => {
    setEditingField(null);
    setTempValue("");
  };

  const onUpdateHeader = async (
    field: "title" | "description",
    value: string,
  ) => {
    try {
      const updatedTask = {
        ...task,
        [field]: value,
      };

      await mutateAsyncTask({
        id: task?.id,
        data: updatedTask,
      });

      Toast.success(
        `${field === "title" ? "Título" : "Descrição"} atualizado!`,
      );
    } catch (error) {
      handleError(error, Toast.error);
    }
  };

  const onConfirm = async () => {
    if (!tempValue.trim()) return onCancel();

    try {
      await onUpdateHeader(editingField!, tempValue);
      setEditingField(null);
    } catch (error) {
      handleError(error, Toast.error);
    }
  };

  return {
    onConfirm,
    onCancel,
    onEdit,
    editingField,
    isSaving: isPending,
    tempValue,
    setTempValue,
  };
}

