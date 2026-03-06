// ... (mantenha seus imports)

import { Button } from "@/presentation/components";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { ScrollView, TextStyle } from "react-native";
import { ITaskSharedProps } from "../interface";
import { ChecklistSection } from "./Checklist/ChecklistSection";
import { TaskHeader } from "./TaskHeader";
import { FontAwesome } from "@expo/vector-icons";

export function TaskDetailView({ task }: ITaskSharedProps) {
  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
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
      <TaskHeader scaledTextBase={scaledTextBase} task={task} />

      <ChecklistSection task={task} />

      <Button
        className='mt-6'
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

