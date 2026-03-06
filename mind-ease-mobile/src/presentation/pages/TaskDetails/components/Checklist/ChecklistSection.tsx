import { Button, Card, CardTitle } from "@/presentation/components";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { v4 as uuidv4 } from "uuid";
import { ChecklistItemEdit } from "./ChecklistItemEdit";
import { ChecklistItemView } from "./ChecklistItemView";
import { ITaskSharedProps } from "../../interface";
import { useChecklist } from "../../hooks/useChecklist";

export const ChecklistSection = ({ task }: ITaskSharedProps) => {
  const {
    append,
    checklistData,
    editingFieldValue,
    editingIndex,
    isAnyItemEditing,
    isSaving,
    onCancelEdition,
    onDeleteChecklistItem,
    onEdit,
    onSaveEdit,
    onToggleChecklistItem,
    setEditingFieldValue,
  } = useChecklist({ task });

  const scaledMediumSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.md,
    "number",
  );

  return (
    <Card
      style={{
        gap: scaledMediumSpacing,
        marginTop: scaledMediumSpacing,
      }}
    >
      <View className='flex-row items-center gap-2'>
        <MaterialCommunityIcons
          name='format-list-checks'
          size={22}
          color={THEME_COLORS.neutral[1000]}
        />
        <CardTitle
          title={`Checklist (${checklistData?.filter((i) => i.isConcluded).length || 0}/${checklistData?.length || 0})`}
        />
      </View>

      <View className='gap-3'>
        {checklistData?.map((item, index) => (
          <View key={item.id || index}>
            {item?.isEditing ? (
              <ChecklistItemEdit
                index={index}
                value={editingFieldValue}
                onChange={setEditingFieldValue}
                onSave={() => onSaveEdit(index)}
                onCancel={() => onCancelEdition(index)}
                isSaving={isSaving && editingIndex === index}
              />
            ) : (
              <ChecklistItemView
                index={index}
                item={item}
                isAnyItemEditing={isAnyItemEditing}
                onToggle={() => onToggleChecklistItem(index)}
                onEdit={() => onEdit(index)}
                onDelete={() => onDeleteChecklistItem(index)}
              />
            )}
          </View>
        ))}
      </View>

      <Button
        variant='dashed'
        disabled={isAnyItemEditing || isSaving}
        onPress={() =>
          append({
            id: uuidv4(),
            text: "",
            isConcluded: false,
            isEditing: true,
          })
        }
        className='w-11/12 self-center'
      >
        + Adicionar mais um item
      </Button>
    </Card>
  );
};

