import { InputField, InputRoot } from "@/presentation/components/Input";
import { SharedModalBase } from "@/presentation/components/SharedModalBase";
import { useCreateColumnMutation } from "@/presentation/features/Columns/columns-queries";
import { useState } from "react";
import { ICreateColumnModal } from "./interface";

export const CreateColumnModal = ({
  boardId,
  visible,
  setVisible,
}: ICreateColumnModal) => {
  const [columnName, setColumnName] = useState("");
  const { mutateAsync: mutateCreateColumn } = useCreateColumnMutation();

  const onSubmitChanges = async () => {
    await mutateCreateColumn({
      data: { boardId: boardId, name: columnName },
    });
    setColumnName("");
    setVisible(false);
  };

  const onCancelAction = () => {
    setColumnName("");
    setVisible(false);
  };

  return (
    <SharedModalBase
      title='Nova coluna'
      labels={[{ key: "name", label: "Nome da coluna" }]}
      saveText={"Adicionar coluna"}
      visible={visible}
      onCancelAction={onCancelAction}
      onSubmitChanges={onSubmitChanges}
    >
      <InputRoot>
        <InputField
          value={columnName}
          onChangeText={setColumnName}
          placeholder='Ex.: Backlog'
          autoCapitalize='sentences'
        />
      </InputRoot>
    </SharedModalBase>
  );
};

