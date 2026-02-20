import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Card } from "@/presentation/components/Card";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { lightenHex } from "@/utils/colorUtils";
import type { IBoardCardProps } from "./interface";

export type { IBoardCardData, IBoardCardProps } from "./interface";

export function BoardCard({ board, onPress }: IBoardCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <Card className="flex-row items-center gap-5">
        <View
          className="w-12 h-12 rounded-full items-center justify-center"
          style={{ backgroundColor: lightenHex(board.color) }}
        >
          <View
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: board.color }}
          />
        </View>
        <View className="flex-1 min-w-0" style={{ minWidth: 0 }}>
          <Text
            className="text-lg font-lexend-semi-bold text-neutral-1000"
            numberOfLines={1}
          >
            {board.title}
          </Text>
          <View className="flex-row items-center gap-6 mt-1 flex-wrap">
            <Text
              className="text-base font-lexend-regular text-neutral-600"
              numberOfLines={1}
            >
              {board.taskCount} tarefas
            </Text>
            <View className="w-1.5 h-1.5 rounded-full bg-neutral-600 flex-shrink-0" />
            <View className="flex-row items-center gap-1.5 flex-shrink-0">
              <MaterialIcons
                name="schedule"
                size={16}
                color={THEME_COLORS.neutral[600]}
              />
              <Text
                className="text-base font-lexend-regular text-neutral-600"
                numberOfLines={1}
              >
                {board.hours}h {board.minutes}m
              </Text>
            </View>
          </View>
        </View>
        <MaterialIcons
          name="chevron-right"
          size={24}
          color={THEME_COLORS.neutral[600]}
        />
      </Card>
    </TouchableOpacity>
  );
}
