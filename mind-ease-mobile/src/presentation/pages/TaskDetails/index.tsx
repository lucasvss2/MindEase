import {
  Dropdown,
  DropdownItem,
  ScreenHeader,
} from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants";
import {
  useDeleteTaskMutation,
  useGetTaskById,
} from "@/presentation/features/Tasks/tasks-queries";
import handleError from "@/utils/helpers/handleError";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ActivityIndicator, Text, View } from "react-native";
import { Toast } from "toastify-react-native";
import { TaskDetailView } from "./components/TaskDetailView";

export function TaskDetailsPage() {
  const { taskId } = useLocalSearchParams<{ taskId: string }>();
  const { data: task, isLoading } = useGetTaskById(taskId!);
  const { mutateAsync: mutateAsyncDeleteTask, isPending: isDeletingTask } =
    useDeleteTaskMutation();
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      checklist: task?.checklist,
    },
  });

  const onDeleteTask = useCallback(async () => {
    try {
      await mutateAsyncDeleteTask(task?.id!);
      Toast.success("Tarefa excluída com sucesso!");
      router.back();
    } catch (error: any) {
      handleError(error, Toast.error);
    }
  }, [mutateAsyncDeleteTask, router, task?.id]);

  if (isLoading || !task) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size='large' color='#000' testID="task-loader" />
      </View>
    );
  }

  return (
    <FormProvider {...form}>
      <ScreenHeader
        onBack={() => router.back()}
        title={task?.title}
        rightSlot={
          <Dropdown

            trigger={
              <View className='p-2'>
                <MaterialIcons
                  name='more-vert'
                  size={24}
                  color={THEME_COLORS.neutral[1000]}
                />
              </View>
            }
            position='right'
            align='bottom'
            closeOnItemPress
            accessibilityLabel='Opções do quadro'
            testIDTrigger="dropdown-trigger-task-actions"
          >
            <DropdownItem onPress={onDeleteTask} disabled={isDeletingTask} testID="delete-task-button">
              <Text className='text-xl font-lexend-regular text-red-600'>
                Excluir tarefa {isDeletingTask && <ActivityIndicator />}
              </Text>
            </DropdownItem>
          </Dropdown>
        }
      />
      <TaskDetailView task={task} />
    </FormProvider>
  );
}

