import { TaskModel } from "@/domain/models/TaskModel";
import { Card } from "@/presentation/components";
import { useGetTaskByBoardAndColumnId } from "@/presentation/features/Tasks/tasks-queries";
import { cn } from "@/utils/twClassnamesResolver";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const TaskList = ({
  boardId,
  columnId,
  columnName,
}: {
  boardId: string;
  columnId: string;
  columnName: string;
}) => {
  const { data: tasks } = useGetTaskByBoardAndColumnId(boardId, columnId);
  const router = useRouter();

  const onNavigateToTaskView = useCallback(
    ({ id }: { id: string }) => {
      router.push({
        pathname: "/(private)/task-details",
        params: { taskId: id },
      });
    },
    [router],
  );

  if (!columnId) return;

  const hasTasks = tasks?.length;

  return !hasTasks ? (
    <Text>Nenhuma tarefa a ser mostrada</Text>
  ) : (
    <Card className='mt-3 border-0 shadow-none gap-3'>
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
              <Text className='text-sm font-lexend-semi-bold text-neutral-1000'>
                {task.title}
              </Text>
              <Text className='text-xs font-lexend-regular text-neutral-600'>
                {task.description}
              </Text>
            </View>
          </Card>
        </TouchableOpacity>
      ))}
    </Card>
  );
};

