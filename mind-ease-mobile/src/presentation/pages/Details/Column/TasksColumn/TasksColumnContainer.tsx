import { TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { TaskModal } from "@/presentation/pages/Tasks/components/TaskModal";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { IColumnTasksSection } from "./interface";

export const TasksColumnContainer = ({
  boardColor,
  boardId,
  children,
  columnId,
  columnName,
}: IColumnTasksSection) => {
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const { fontType } = useUserPreferencesStore();
  const taskForm = useForm();

  const scaledHorizontalSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.lg,
    "number",
  );
  const scaledTopSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.sm,
    "number",
  );
  const scaledBottomSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING.xl,
    "number",
  );
  const scaledIconSize = useAccessibilityScale<number>(
    TOKENS.SIZE["3xs"],
    "number",
  );

  const scaledSmText = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.sm);
  const scaledXsText = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE.xs);

  const scaledTextStyle = {
    fontFamily: TOKENS.FONT_FAMILY[fontType],
    ...scaledSmText,
  };

  return (
    <ScrollView
      className={cn("flex-1")}
      contentContainerStyle={{
        paddingHorizontal: scaledHorizontalSpacing,
        paddingTop: scaledTopSpacing,
        paddingBottom: scaledBottomSpacing,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className={cn("py-3 flex-row justify-between")}>
        <View className={cn("flex-row items-center gap-2")}>
          <MaterialIcons
            name={"list"}
            size={scaledIconSize}
            color={boardColor}
          />
          <View className={cn("flex-row")}>
            <Text style={[scaledTextStyle]} className='font-bold'>
              {columnName}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className='flex-row items-center gap-4'
          onPress={() => setShowCreateTaskModal(true)}
        >
          <Text style={[scaledXsText]}>Adicionar</Text>
          <FontAwesome name='plus' size={14} />
        </TouchableOpacity>
      </View>

      {children}

      <FormProvider {...taskForm}>
        <TaskModal
          visible={showCreateTaskModal}
          onCancelAction={() => setShowCreateTaskModal(false)}
          snapPoints={[80, 90]}
          boardId={boardId}
          columnId={columnId}
        />
      </FormProvider>
    </ScrollView>
  );
};

