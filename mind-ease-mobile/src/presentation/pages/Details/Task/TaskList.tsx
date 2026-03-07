import { TaskModel } from "@/domain/models/TaskModel";
import { Card } from "@/presentation/components";
import { TOKENS } from "@/presentation/constants";
import { useGetTaskByBoardAndColumnId } from "@/presentation/features/Tasks/tasks-queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { useRouter } from "expo-router";
import { useCallback, useEffect } from "react";
import { Text, TextStyle, TouchableOpacity, View } from "react-native";

export const TaskList = ({
  boardId,
  columnId,
}: {
  boardId: string;
  columnId: string;
}) => {
  const { data: tasks, refetch } = useGetTaskByBoardAndColumnId(
    boardId,
    columnId,
  );
  const router = useRouter();
  const { activeProfileId, study, work } = useUserPreferencesStore();
  const { fontType } = activeProfileId === "study" ? study : work;

  const scaledXsFontSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.xs,
  );
  const scaledSmFontSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.sm,
  );

  const scaledSmSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );

  const onNavigateToTaskView = useCallback(
    ({ id }: { id: string }) => {
      router.push({
        pathname: "/(private)/task-details",
        params: { taskId: id },
      });
    },
    [router],
  );

  useEffect(() => {
    if (columnId) {
      refetch();
    }
  }, [columnId, refetch]);

  const hasTasks = tasks?.length;
  const fontFamily = TOKENS.FONT_FAMILY[fontType];

  return !hasTasks ? (
    <Text>Nenhuma tarefa a ser mostrada</Text>
  ) : (
    <Card
      className=' border-0 shadow-none '
      style={{ gap: scaledSmSpacing, marginTop: scaledSmSpacing }}
    >
      {tasks.map((task: TaskModel, index: number) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          onPress={() => {
            onNavigateToTaskView({ id: task?.id });
          }}
        >
          <Card className={cn("bg-neutral-0 border border-neutral-200")}>
            <View className={cn("gap-1")}>
              <Text
                className=' text-neutral-1000'
                style={[{ fontFamily, fontWeight: 700 }, scaledSmFontSize]}
              >
                {task.title}
              </Text>
              <Text
                className='text-xs  text-neutral-600'
                style={[{ fontFamily }, scaledXsFontSize]}
              >
                {task.description}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </Card>
  );
};

