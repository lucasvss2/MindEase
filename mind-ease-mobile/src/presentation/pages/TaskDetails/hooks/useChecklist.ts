import { useUpdateTaskMutation } from "@/presentation/features/Tasks/tasks-queries";
import handleError from "@/utils/helpers/handleError";
import { useCallback, useState } from "react";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Toast } from "toastify-react-native";
import { IChecklistForm, ITaskSharedProps } from "../interface";

/** Hook responsável por centralizar toda a lógica da secão Checklist */

export function useChecklist({ task }: ITaskSharedProps) {
  const [editingFieldValue, setEditingFieldValue] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const { control, setValue, getValues } = useFormContext<IChecklistForm>();

  const checklistData = useWatch({
    name: "checklist",
    control,
    defaultValue: task?.checklist,
  });

  const { append, remove, update } = useFieldArray({
    control,
    name: "checklist",
  });

  const { mutateAsync: updateTaskMutation, isPending: isPedingUpdateTask } =
    useUpdateTaskMutation();

  const isAnyItemEditing = checklistData?.some((item) => item.isEditing);

  const onEdit = useCallback(
    (index: number) => {
      const currentItem = getValues(`checklist.${index}`);
      setEditingIndex(index);
      setEditingFieldValue(currentItem.text);

      update(index, { ...currentItem, isEditing: true });
    },
    [getValues, update],
  );

  const isSaving = isPedingUpdateTask;

  const persistChecklist = useCallback(
    async (updatedList: any[]) => {
      const dataToSave = updatedList.map(({ isEditing, ...rest }) => rest);

      return await updateTaskMutation({
        id: task?.id,
        data: {
          ...task,
          checklist: dataToSave,
        },
      });
    },
    [task, updateTaskMutation],
  );

  const onSaveEdit = useCallback(
    async (index: number) => {
      try {
        const currentItems = getValues("checklist");

        const updatedChecklist = currentItems.map((item, i) => ({
          ...item,
          text: i === index ? editingFieldValue : item.text,
          isEditing: false,
        }));

        setValue("checklist", updatedChecklist);
        await persistChecklist(updatedChecklist);

        setEditingIndex(null);
        setEditingFieldValue("");
      } catch (error) {
        handleError(error, Toast.error);
      }
    },
    [editingFieldValue, getValues, persistChecklist, setValue],
  );

  const onToggleChecklistItem = useCallback(
    async (index: number) => {
      try {
        const currentChecklist = getValues("checklist");

        const updatedChecklist = currentChecklist.map((item, i) =>
          i === index ? { ...item, isConcluded: !item.isConcluded } : item,
        );

        setValue("checklist", updatedChecklist);
        await persistChecklist(updatedChecklist);
      } catch (error) {
        handleError(error, Toast.error);
      }
    },
    [getValues, persistChecklist, setValue],
  );

  const onCancelEdition = useCallback(
    (index: number) => {
      const currentItem = getValues(`checklist.${index}`);

      const isNewItem = !currentItem?.text?.trim();

      if (isNewItem) {
        remove(index);
      } else {
        update(index, { ...currentItem, isEditing: false });
      }

      setEditingIndex(null);
      setEditingFieldValue("");
    },
    [getValues, remove, update],
  );

  const onDeleteChecklistItem = useCallback(
    async (index: number) => {
      try {
        const currentChecklist = getValues("checklist");

        const updatedChecklist = currentChecklist.filter((_, i) => i !== index);

        remove(index);

        await persistChecklist(updatedChecklist);
      } catch (error) {
        handleError(error, Toast.error);
      }
    },
    [getValues, persistChecklist, remove],
  );

  return {
    onCancelEdition,
    onDeleteChecklistItem,
    onEdit,
    onSaveEdit,
    onToggleChecklistItem,
    append,
    isAnyItemEditing,
    isPedingUpdateTask,
    isSaving,
    editingIndex,
    checklistData,
    editingFieldValue,
    setEditingFieldValue,
  };
}

