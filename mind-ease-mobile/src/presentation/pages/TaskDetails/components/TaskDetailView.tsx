import { Button, Card } from "@/presentation/components";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, TextStyle } from "react-native";
import { ITaskSharedProps } from "../interface";
import { ChecklistSection } from "./Checklist/ChecklistSection";
import { FocusConfigField } from "./FocusConfigField";
import { TaskHeader } from "./TaskHeader";

export function TaskDetailView({ task }: ITaskSharedProps) {
  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );
  const [focusTime, setFocusTime] = useState<string>("1");
  const [restTime, setRestTime] = useState<string>("1");

  const [isEditingFocusTime, setIsEditingFocusTime] = useState(false);
  const [isEditingRestTime, setIsEditingRestTime] = useState(false);

  const router = useRouter();
  // const { setFocusDurationMinutes, setRestDurationMinutes } = useTimerStore();

  const onNavigateToFocusScreen = useCallback(() => {
    // setFocusDurationMinutes(task?.focusDurationMinutes)
    //setRestDurationMinutes(task?.restDurationMinutes)

    router.push({
      pathname: "/(private)/focus",
      params: {
        taskId: task.id,
        activityTitle: task.title,
        activityDescription: task.description,
      },
    });
  }, [router, task.description, task.id, task.title]);

  //TODO: Implementar quando a API estiver pronta
  const onUpdateFocusConfig = useCallback((fieldName: "focus" | "rest") => {
    if (fieldName === "focus") setIsEditingFocusTime(false);
    else setIsEditingRestTime(false);
    //TODO: Remover foco do campo após clicar em 'confirmar'
  }, []);

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
      <TaskHeader scaledTextBase={scaledTextBase} task={task} />

      <ChecklistSection task={task} />

      <Card className='gap-4 mt-8'>
        <FocusConfigField
          label='Tempo de foco(min)'
          isEditing={isEditingFocusTime}
          setIsEditing={setIsEditingFocusTime}
          value={focusTime}
          setValue={setFocusTime}
          onUpdateFocusConfig={() => onUpdateFocusConfig("focus")}
        />

        <FocusConfigField
          label='Tempo de descanço(min)'
          isEditing={isEditingRestTime}
          setIsEditing={setIsEditingRestTime}
          value={restTime}
          setValue={setRestTime}
          onUpdateFocusConfig={() => onUpdateFocusConfig("rest")}
        />

        <Button
          className='mt-6'
          onPress={onNavigateToFocusScreen}
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

