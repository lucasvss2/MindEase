import { Button, Card } from "@/presentation/components";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback, useMemo, useState } from "react";
import { ScrollView, TextStyle } from "react-native";
import { ITaskSharedProps } from "../interface";
import { ChecklistSection } from "./Checklist/ChecklistSection";
import { FocusConfigField } from "./FocusConfigField";
import { TaskHeader } from "./TaskHeader";
import { useTimerStore } from "@/presentation/store";
import { useUpdateTaskMutation } from "@/presentation/features/Tasks/tasks-queries";
import { Toast } from "toastify-react-native";
import handleError from "@/utils/helpers/handleError";

export function TaskDetailView({ task }: ITaskSharedProps) {
  const scaledTextSm = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.sm);
  const [focusTime, setFocusTime] = useState<string>(
    task?.focusMinutes?.toString() || "",
  );
  const [restTime, setRestTime] = useState<string>(
    task?.shortBreakMinutes?.toString() || "",
  );

  const [isEditingFocusTime, setIsEditingFocusTime] = useState(false);
  const [isEditingRestTime, setIsEditingRestTime] = useState(false);
  const { setFocusDurationMinutes, setRestDurationMinutes } = useTimerStore();
  const { mutateAsync: updateTaskMutation, isPending: isUpdateTaskPending } =
    useUpdateTaskMutation();

  const router = useRouter();

  const shouldEnableFocusButton = useMemo(
    () => focusTime && focusTime !== "0" && focusTime !== "",
    [focusTime],
  );

  const onNavigateToFocusScreen = useCallback(() => {
    setFocusDurationMinutes(task?.focusMinutes || 0);
    setRestDurationMinutes(task?.shortBreakMinutes || 0);

    router.push({
      pathname: "/(private)/focus",
      params: {
        taskId: task.id,
        activityTitle: task.title,
        activityDescription: task.description,
        activityFocusDuration: task?.focusMinutes,
        activityRestDuration: task?.shortBreakMinutes,
      },
    });
  }, [
    router,
    setFocusDurationMinutes,
    setRestDurationMinutes,
    task.description,
    task?.focusMinutes,
    task.id,
    task?.shortBreakMinutes,
    task.title,
  ]);

  const onResetFocusSectionField = useCallback(
    (isFocusMinutesField: boolean) => {
      if (isFocusMinutesField) setIsEditingFocusTime(false);
      else setIsEditingRestTime(false);
    },
    [],
  );

  const onUpdateFocusConfig = useCallback(
    async (field: "focusMinutes" | "shortBreakMinutes", value: string) => {
      try {
        const updatedTask = {
          ...task,
          [field]: Number(value),
        };

        await updateTaskMutation({
          id: task?.id,
          data: updatedTask,
        });

        const isFocusMinutesField = field === "focusMinutes";

        const successMessage = `Periodo de ${isFocusMinutesField ? "foco" : "descanso"} atualizado com sucesso!`;

        Toast.success(successMessage);
        onResetFocusSectionField(isFocusMinutesField);
      } catch (error) {
        handleError(error, Toast.error);
      }
    },
    [onResetFocusSectionField, task, updateTaskMutation],
  );

  return (
    <ScrollView
      className='flex-1 bg-neutral-0 gap-4'
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 24,
        paddingBottom: 24,
      }}
      keyboardShouldPersistTaps='handled'
    >
      <TaskHeader scaledTextBase={scaledTextSm} task={task} />

      <ChecklistSection task={task} />

      <Card className='gap-4 mt-8' testID='task-focus'>
        <FocusConfigField
          label='Tempo de foco(min)'
          isEditing={isEditingFocusTime}
          setIsEditing={setIsEditingFocusTime}
          value={focusTime}
          setValue={setFocusTime}
          onUpdateFocusConfig={() =>
            onUpdateFocusConfig("focusMinutes", focusTime)
          }
          isPending={isUpdateTaskPending}
        />

        <FocusConfigField
          label='Tempo de descanço(min)'
          isEditing={isEditingRestTime}
          setIsEditing={setIsEditingRestTime}
          value={restTime}
          setValue={setRestTime}
          onUpdateFocusConfig={() =>
            onUpdateFocusConfig("shortBreakMinutes", restTime)
          }
          isPending={isUpdateTaskPending}
        />

        <Button
          className='mt-6'
          onPress={onNavigateToFocusScreen}
          disabled={!shouldEnableFocusButton}
          leftIcon={
            <FontAwesome
              name='clock-o'
              size={22}
              color={THEME_COLORS.neutral[1000]}
            />
          }
        >
          Iniciar foco
        </Button>
      </Card>
    </ScrollView>
  );
}

