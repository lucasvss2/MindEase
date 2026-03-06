import { Card } from "@/presentation/components";
import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { TextStyle } from "react-native";

import { useTaskHeader } from "../../hooks/useTaskHeader";
import { ITaskHeader } from "../../interface";
import { TaskHeaderEditionContainer } from "./TaskHeaderEditionContainer";
import { TaskHeaderTextContainer } from "./TaskHeaderTextContainer";

export const TaskHeader = ({ task, scaledTextBase }: ITaskHeader) => {
  const {
    onCancel,
    onConfirm,
    onEdit,
    editingField,
    isSaving,
    tempValue,
    setTempValue,
  } = useTaskHeader({ task });

  const scaledTitleSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["2xl"],
  );

  return (
    <Card className='gap-8'>
      {editingField === "title" ? (
        <TaskHeaderEditionContainer
          isSaving={isSaving}
          onCancel={onCancel}
          onConfirm={onConfirm}
          setTempValue={setTempValue}
          tempValue={tempValue}
        />
      ) : (
        <TaskHeaderTextContainer
          onPress={() => onEdit("title", task?.title)}
          scaledText={scaledTitleSize}
          text={task?.title}
        />
      )}

      {editingField === "description" ? (
        <TaskHeaderEditionContainer
          isSaving={isSaving}
          onCancel={onCancel}
          onConfirm={onConfirm}
          setTempValue={setTempValue}
          tempValue={tempValue}
        />
      ) : (
        <TaskHeaderTextContainer
          onPress={() => onEdit("description", task?.description)}
          scaledText={scaledTextBase}
          text={task?.description}
        />
      )}
    </Card>
  );
};

