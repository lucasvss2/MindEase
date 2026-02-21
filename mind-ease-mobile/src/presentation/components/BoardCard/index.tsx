import { Card } from "@/presentation/components/Card";
import { THEME_COLORS } from "@/presentation/constants/theme";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { lightenHex } from "@/utils/colorUtils";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import type { IBoardCardProps } from "./interface";

export type { IBoardCardData, IBoardCardProps } from "./interface";

export function BoardCard({ board }: IBoardCardProps) {
  const router = useRouter();
  const { enableSummaryMode } = useUserPreferencesStore();

  const onNavigateToDetails = () => {
    if (!board) return;

    router.push({
      pathname: "/details",
      params: { id: board.id, name: board.name, color: board.color },
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onNavigateToDetails}>
      <Card className='flex-row items-center gap-5'>
        {!enableSummaryMode && (
          <View
            className='w-12 h-12 rounded-full items-center justify-center'
            style={{ backgroundColor: lightenHex(board?.color) }}
          >
            <View
              className='w-6 h-6 rounded-full'
              style={{ backgroundColor: board?.color }}
            />
          </View>
        )}

        <View className='flex-1'>
          <Text className='text-lg font-lexend-semi-bold text-neutral-1000'>
            {board?.name}
          </Text>
          <View className='flex-row items-center gap-6 mt-1'>
            {!enableSummaryMode && (
              <Text className='text-base font-lexend-regular text-neutral-600'>
                {board?.tasksCount} tarefas
              </Text>
            )}

            {board?.totalHours && !enableSummaryMode && (
              <>
                <View className='w-1.5 h-1.5 rounded-full bg-neutral-600' />
                <View className='flex-row items-center gap-1.5'>
                  <MaterialIcons
                    name='schedule'
                    size={16}
                    color={THEME_COLORS.neutral[600]}
                  />
                  <Text className='text-base font-lexend-regular text-neutral-600'>
                    {board?.totalHours}h
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>

        <MaterialIcons
          name='chevron-right'
          size={24}
          color={THEME_COLORS.neutral[600]}
        />
      </Card>
    </TouchableOpacity>
  );
}

