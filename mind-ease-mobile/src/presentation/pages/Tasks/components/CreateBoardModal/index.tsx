import { Button, ColorPicker, SheetModal } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { cn } from "@/utils/twClassnamesResolver";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import type { ICreateBoardModalProps } from "./interface";

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

export type { ICreateBoardModalProps, ICreateBoardPayload } from "./interface";

export function CreateBoardModal({
  visible,
  onClose,
  onCreate,
  snapPoints,
  initialSnapIndex,
}: ICreateBoardModalProps) {
  const [title, setTitle] = useState("");
  const [selectedColor, setSelectedColor] = useState(BOARD_COLORS[0]);

  const handleCreate = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    onCreate({ title: trimmed, color: selectedColor });
    setTitle("");
    setSelectedColor(BOARD_COLORS[0]);
    onClose();
  };

  const handleCancel = () => {
    setTitle("");
    setSelectedColor(BOARD_COLORS[0]);
    onClose();
  };

  return (
    <SheetModal
      visible={visible}
      onClose={handleCancel}
      title='Novo quadro'
      snapPoints={snapPoints}
      initialSnapIndex={initialSnapIndex}
    >
      <Text className='text-sm font-lexend-regular text-neutral-600 mb-2'>
        Nome do quadro
      </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder='Ex.: Quadro Trabalho'
        placeholderTextColor={THEME_COLORS.neutral[600]}
        className={cn(
          "border border-neutral-200 rounded-lg px-4 py-3 text-base font-lexend-regular text-neutral-1000 mb-5",
        )}
        autoCapitalize='sentences'
      />

      <Text className='text-sm font-lexend-regular text-neutral-600 mb-2'>
        Cor do quadro
      </Text>
      <ColorPicker
        colors={BOARD_COLORS}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        contentPaddingH={CONTENT_PADDING_H}
      />

      <View className={cn("flex-row gap-3 mt-6")}>
        <Button
          variant='default'
          onPress={handleCreate}
          disabled={!title.trim()}
          className={cn("py-3 px-5")}
        >
          <Text>Adicionar quadro</Text>
        </Button>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={handleCancel}
          className={cn(
            "flex-1 py-3 rounded-lg items-center justify-center bg-neutral-200",
          )}
        >
          <Text className='text-base font-lexend-semi-bold text-neutral-1000'>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </SheetModal>
  );
}

