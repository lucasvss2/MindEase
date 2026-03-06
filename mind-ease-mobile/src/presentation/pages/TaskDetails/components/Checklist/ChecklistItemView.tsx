import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import { IChecklistItemView } from "../interface";

export const ChecklistItemView = ({
  item,
  onToggle,
  onEdit,
  onDelete,
  isAnyItemEditing,
  index,
}: IChecklistItemView) => {
  const { fontType } = useUserPreferencesStore();

  return (
    <View
      className='flex-row items-center justify-between p-3 rounded-xl'
      style={{ backgroundColor: THEME_COLORS.neutral[100], minHeight: 52 }}
    >
      <View className='flex-row items-center flex-1 gap-3'>
        <TouchableOpacity onPress={() => onToggle(index)}>
          <MaterialCommunityIcons
            name={item.isConcluded ? "check-circle-outline" : "radiobox-blank"}
            size={24}
            color={item.isConcluded ? "#10B981" : TOKENS.COLORS.neutral[400]}
          />
        </TouchableOpacity>

        <Text
          className={cn(
            "flex-1 text-base",
            item.isConcluded
              ? "text-neutral-500 line-through"
              : "text-neutral-800",
          )}
          style={{ fontFamily: fontType }}
        >
          {item.text}
        </Text>
      </View>

      <View className='flex-row items-center gap-2'>
        <TouchableOpacity
          disabled={isAnyItemEditing}
          onPress={() => onEdit(index)}
        >
          <MaterialCommunityIcons
            name='pencil-outline'
            size={22}
            color={
              isAnyItemEditing
                ? TOKENS.COLORS.neutral[300]
                : TOKENS.COLORS.neutral[600]
            }
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(index)}>
          <MaterialCommunityIcons
            name='delete-outline'
            size={22}
            color={TOKENS.COLORS.red[500]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

