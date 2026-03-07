import { ColorPicker } from "@/presentation/components";
import { FormFieldLabel } from "@/presentation/components/FormField";
import { InputField, InputRoot } from "@/presentation/components/Input";
import { SharedModalBase } from "@/presentation/components/SharedModalBase";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import type { IBoardModalProps } from "./interface";

const CONTENT_PADDING_H = 30 * 2;

const BOARD_COLORS = [
  THEME_COLORS.blue[400],
  "#004239",
  "#9F8000",
  "#7C3AED",
  "#059669",
  "#DC2626",
  "#2563EB",
  "#EA580C",
];

export type { IBoardModalProps } from "./interface";

export function BoardModal({
  visible,
  onCancel,
  onSubmit: onCreate,
  snapPoints,
  name,
  color,
  isEditing,
  isLoading,
}: IBoardModalProps) {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(BOARD_COLORS[0]);
  const router = useRouter();

  const handleCreate = () => {
    const trimmed = title.trim();
    if (!trimmed) return;

    setTitle("");
    setSelectedColor(BOARD_COLORS[0]);
    onCreate({ name: trimmed, color: selectedColor });
    router.setParams({ name: trimmed, color: selectedColor });

    onCancel();
  };

  const handleCancel = () => {
    setTitle("");
    setSelectedColor(BOARD_COLORS[0]);
    onCancel();
  };

  useEffect(() => {
    if (name) setTitle(name);
    if (color) setSelectedColor(color);
  }, [name, color, visible, router]);

  return (
    <SharedModalBase
      visible={visible}
      onCancelAction={handleCancel}
      title={isEditing ? "Editar quadro" : "Novo quadro"}
      snapPoints={snapPoints}
      onSubmitChanges={handleCreate}
      saveText={isEditing ? "Atualizar quadro" : "Adicionar quadro"}
      isLoading={isLoading}
      labels={[{ label: "Nome do quadro", key: "boardName" }]}
      disabled={isLoading || title.trim().length === 0}
    >
      <View className='gap-4'>
        <InputRoot>
          <InputField
            value={title}
            onChangeText={setTitle}
            placeholder='Ex.: Quadro Trabalho'
            autoCapitalize='sentences'
            testID="board-name"
          />
        </InputRoot>

        <FormFieldLabel>Cor do quadro</FormFieldLabel>

        <ColorPicker
          colors={BOARD_COLORS}
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          contentPaddingH={CONTENT_PADDING_H}
        />
      </View>
    </SharedModalBase>
  );
}

