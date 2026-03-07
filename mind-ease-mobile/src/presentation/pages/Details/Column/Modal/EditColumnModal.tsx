import { useCallback, useState } from "react";

import { InputRoot } from "@/presentation/components/Input";
import { InputField } from "@/presentation/components/Input/compositions/InputField";
import { SharedModalBase } from "@/presentation/components/SharedModalBase";
import { TOKENS } from "@/presentation/constants/tokens";
import {
  useDeleteColumnMutation,
  useUpdateColumnMutation,
} from "@/presentation/features/Columns/columns-queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import handleError from "@/utils/helpers/handleError";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { Toast } from "toastify-react-native";
import { IEditColumnModal } from "./interface";

export const EditColumnModal = ({
  columns,
  visible,
  onClose,
}: IEditColumnModal) => {
  const { mutateAsync: updateColumn, isPending: isUpdatePending } =
    useUpdateColumnMutation();
  const { mutateAsync: deleteColumn, isPending: isDeletePending } =
    useDeleteColumnMutation();

  const [editedNames, setEditedNames] = useState<{ [key: string]: string }>({});
  const [deletedIds, setDeletedIds] = useState<string[]>([]);

  const visibleColumns = columns?.filter((col) => !deletedIds.includes(col.id));

  const scaledMdSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.md,
    "number",
  );

   const scaledXlFontSize = useAccessibilityScale<number>(
    TOKENS.SPACING.xl,
    "number",
  );

  const handleOnClose = useCallback(() => {
    setEditedNames({});
    setDeletedIds([]);
    onClose();
  }, [onClose]);

  const handleSaveAll = useCallback(async () => {
    try {
      const deletePromises = deletedIds.map((id) => deleteColumn(id));

      const updatePromises = Object.entries(editedNames).map(([id, name]) =>
        updateColumn({ id, data: { name } }),
      );

      await Promise.all([...deletePromises, ...updatePromises]);
      handleOnClose();
    } catch (error) {
      handleError(error, Toast.error);
    }
  }, [deletedIds, editedNames, handleOnClose, deleteColumn, updateColumn]);

  const markAsDeleted = useCallback((id: string) => {
    setDeletedIds((prev) => [...prev, id]);
  }, []);

  return (
    <SharedModalBase
      visible={visible}
      onCancelAction={handleOnClose}
      title={"Editar colunas"}
      onSubmitChanges={handleSaveAll}
      labels={[
        { key: "columnName", label: "Nome da coluna" },
        { key: "deleteColumn", label: "Excluir coluna" },
      ]}
      saveText='Salvar alterações'
      snapPoints={[70, 90]}
      isLoading={isUpdatePending || isDeletePending}
    >
      <ScrollView>
        {visibleColumns?.map((column) => (
          <View
            className='flex-row justify-between items-center'
            key={column.id}
            style={{ gap: scaledMdSpacing, marginBottom: scaledMdSpacing }}
          >
            <InputRoot className='w-7/12'>
              <InputField
                value={editedNames[column.id] ?? column.name}
                onChangeText={(value) =>
                  setEditedNames((prev) => ({ ...prev, [column.id]: value }))
                }
                placeholder='Ex.: Backlog'
              />
            </InputRoot>

            <TouchableOpacity
              className='w-2/12'
              onPress={() => markAsDeleted(column.id)}
            >
              <FontAwesome5
                name='trash'
                size={scaledXlFontSize}
                color={TOKENS.COLORS.red[500]}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SharedModalBase>
  );
};

