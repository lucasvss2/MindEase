import { Button, ColorPicker, SheetModal } from "@/presentation/components";
import { FormField, FormFieldLabel } from "@/presentation/components/FormField";
import { InputField, InputRoot } from "@/presentation/components/Input";
import { TOKENS } from "@/presentation/constants";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { cn } from "@/utils/twClassnamesResolver";
import { useState } from "react";
import { TextStyle, View } from "react-native";
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

  const scaledButtonGap = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );

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

  const scaledLabelSize = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.xl);
  const scaledContainerSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.md,
    "number",
  );

  return (
    <SheetModal
      visible={visible}
      onClose={handleCancel}
      title='Novo quadro'
      snapPoints={snapPoints}
      initialSnapIndex={initialSnapIndex}
      titleStyle={{ ...scaledLabelSize }}
    >
      <View style={{ gap: scaledContainerSpacing }}>
        <FormField>
          <FormFieldLabel> Nome do quadro</FormFieldLabel>
          <InputRoot>
            <InputField
              value={title}
              onChangeText={setTitle}
              placeholder='Ex.: Quadro Trabalho'
              placeholderTextColor={THEME_COLORS.neutral[600]}
              autoCapitalize='sentences'
            />
          </InputRoot>
        </FormField>

        <FormField>
          <FormFieldLabel> Cor do quadro</FormFieldLabel>
          <ColorPicker
            colors={BOARD_COLORS}
            selectedColor={selectedColor}
            onSelectColor={setSelectedColor}
            contentPaddingH={CONTENT_PADDING_H}
          />
        </FormField>
      </View>

      <View
        className={cn("flex-row justify-between flex-wrap")}
        style={{ gap: scaledButtonGap }}
      >
        <Button onPress={handleCreate} disabled={!title.trim()}>
          Adicionar quadro
        </Button>

        <Button
          activeOpacity={0.7}
          onPress={handleCancel}
          variant='neutral'
          className='flex-1'
        >
          Cancelar
        </Button>
      </View>
    </SheetModal>
  );
}
