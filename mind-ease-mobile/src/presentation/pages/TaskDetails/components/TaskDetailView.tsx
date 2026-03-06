import { Button } from "@/presentation/components";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { useTimerStore } from "@/presentation/store";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCallback } from "react";
import { ScrollView, TextStyle } from "react-native";
import { ITaskSharedProps } from "../interface";
import { ChecklistSection } from "./Checklist/ChecklistSection";
import { TaskHeader } from "./TaskHeader";

export function TaskDetailView({ task }: ITaskSharedProps) {
  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );

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
    </ScrollView>
  );
}

