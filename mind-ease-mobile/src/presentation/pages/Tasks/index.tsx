import { useMemo, useState } from "react";
import { View } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { ScreenHeader } from "@/presentation/components";
import { useTimerStore } from "@/presentation/store";
import { formatTimeSpent } from "@/utils/dateUtils";
import { cn } from "@/utils/twClassnamesResolver";
import { SECTION_CONTENT } from "@/data/mocks";
import type { SectionKey } from "@/data/mocks";
import type { TasksVariant, ITasksParams } from "./interface";
import { TASKS_HEADER_TITLES } from "./interface";
import { TaskFormView, TaskDetailView } from "./components";

export type { ITasksParams, TasksVariant } from "./interface";

function getTaskById(id: string | undefined) {
  if (!id) return null;
  const match = id.match(/^(.+)-(\d+)$/);
  if (!match) return null;
  const key = match[1] as SectionKey;
  const index = parseInt(match[2], 10);
  const section = SECTION_CONTENT[key];
  if (!section || index < 0 || index >= section.items.length) return null;
  return section.items[index];
}

function getTasksVariant(id: string | undefined): TasksVariant {
  return id ? "detail" : "form";
}

/**
 * Tela de tarefa com duas vertentes: criação (form) e detalhe/edição (detail).
 * Orquestra qual view exibir conforme os parâmetros da rota.
 */
export function Tasks() {
  const router = useRouter();
  const { id, boardId, boardTitle, boardColor } =
    useLocalSearchParams() as ITasksParams;

  const task = useMemo(() => getTaskById(id), [id]);
  const variant = useMemo(() => getTasksVariant(id), [id]);
  const headerTitle = TASKS_HEADER_TITLES[variant];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [checklistItems, setChecklistItems] = useState<
    { label: string; completed: boolean }[]
  >([]);
  const [checklistInput, setChecklistInput] = useState("");

  const {
    totalTimeSpentSeconds,
    focusDurationMinutes,
    setFocusDurationMinutes,
    restDurationMinutes,
    setRestDurationMinutes,
    enableSoftSounds,
    setEnableSoftSounds,
  } = useTimerStore();
  const timeSpentLabel = formatTimeSpent(totalTimeSpentSeconds);

  const checklistCompleted = checklistItems.filter((i) => i.completed).length;
  const checklistTotal = checklistItems.length;

  const handleAddChecklistItem = () => {
    const trimmed = checklistInput.trim();
    if (!trimmed) return;
    setChecklistItems((prev) => [...prev, { label: trimmed, completed: false }]);
    setChecklistInput("");
  };

  const handleToggleItem = (index: number) => {
    setChecklistItems((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleRemoveItem = (index: number) => {
    setChecklistItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleBack = () => {
    if (boardId) {
      router.replace({
        pathname: "/details",
        params: {
          id: boardId,
          title: boardTitle ?? "",
          color: boardColor ?? "",
        },
      });
    } else {
      router.back();
    }
  };

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <ScreenHeader
        onBack={handleBack}
        title={headerTitle}
        className="bg-neutral-0 border-neutral-200"
      />
      {variant === "form" ? (
        <TaskFormView
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          checklistItems={checklistItems}
          checklistInput={checklistInput}
          setChecklistInput={setChecklistInput}
          checklistCompleted={checklistCompleted}
          checklistTotal={checklistTotal}
          onAddChecklistItem={handleAddChecklistItem}
          onToggleChecklistItem={handleToggleItem}
          onRemoveChecklistItem={handleRemoveItem}
          focusDurationMinutes={focusDurationMinutes}
          setFocusDurationMinutes={setFocusDurationMinutes}
          restDurationMinutes={restDurationMinutes}
          setRestDurationMinutes={setRestDurationMinutes}
          timeSpentLabel={timeSpentLabel}
          onSave={handleBack}
          enableSoftSounds={enableSoftSounds}
          setEnableSoftSounds={setEnableSoftSounds}
        />
      ) : task ? (
        <TaskDetailView
          task={task}
          checklistItems={checklistItems}
          checklistInput={checklistInput}
          setChecklistInput={setChecklistInput}
          checklistCompleted={checklistCompleted}
          checklistTotal={checklistTotal}
          onAddChecklistItem={handleAddChecklistItem}
          onToggleChecklistItem={handleToggleItem}
          onRemoveChecklistItem={handleRemoveItem}
          focusDurationMinutes={focusDurationMinutes}
          setFocusDurationMinutes={setFocusDurationMinutes}
          restDurationMinutes={restDurationMinutes}
          setRestDurationMinutes={setRestDurationMinutes}
          timeSpentLabel={timeSpentLabel}
        />
      ) : (
        <View className={cn("flex-1")} />
      )}
    </View>
  );
}

