import { Button, SheetModal } from "@/presentation/components";
import { Divider } from "@/presentation/components/Divider";
import { FormField } from "@/presentation/components/FormField/compositions/FormField";
import { InputField, InputRoot } from "@/presentation/components/Input";
import { TOKENS } from "@/presentation/constants";
import { useCreateTaskMutation } from "@/presentation/features/Tasks/tasks-queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

import { Checklist } from "@/presentation/components/Checklist";
import handleError from "@/utils/helpers/handleError";
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { Toast } from "toastify-react-native";
import { ICreateTask, IGetFormattedChecklistData, ITaskModal } from "./interface";

export const TaskModal = ({
  onCancelAction,
  snapPoints,
  visible,
  boardId,
  columnId,
}: ITaskModal) => {
  const { fontType } = useUserPreferencesStore();
  const { control, handleSubmit } = useFormContext();

  const { mutateAsync: createTask, isPending: isPendingTaskCreation } =
    useCreateTaskMutation();

  const { fields: checkListFields } = useFieldArray({
    control,
    name: "checklist",
  });

  const getFormattedChecklistData = (
    checklist: IGetFormattedChecklistData[],
  ) => {
    return checklist?.map(({ value }) => ({
      id: uuidv4(),
      text: value,
      isConcluded: false,
    }));
  };

  const onCreateTask = async ({
    description,
    status,
    title,
    checklist,
    enableSoundAlerts,
  }: ICreateTask) => {
    const formattedChecklist = getFormattedChecklistData(checklist);

    try {
      await createTask({
        data: {
          boardId: boardId,
          columnId: columnId!,
          description,
          dueDate: new Date()?.toISOString(),
          hours: 0,
          status,
          title,
          checklist: formattedChecklist,
          enableSoundAlerts: enableSoundAlerts || false,
          isConcluded: false,
        },
      });
      onCancelAction();
    } catch (error) {
      handleError(error, Toast.error);
    }
  };

  const scaledChecklisTitle = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["xl"],
  );

  console.log({ checkListFields });

  return (
    <SheetModal
      visible={visible}
      onClose={onCancelAction}
      title={"Criar nova tarefa"}
      snapPoints={snapPoints}
    >
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <View className={cn("gap-6")}>
          <Controller
            name='title'
            rules={{ required: "*Campo obrigatório" }}
            render={({ field: { onChange, value }, fieldState }) => (
              <FormField
                label='Título*'
                variant={fieldState.error ? "error" : "default"}
                message={fieldState.error?.message}
              >
                <InputRoot>
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder='Ex: Estudar React'
                  />
                </InputRoot>
              </FormField>
            )}
          />

          <Controller
            name='description'
            render={({ field: { onChange, value } }) => (
              <FormField label='Descrição'>
                <InputRoot className='max-h-80 h-28'>
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    multiline
                    placeholder='Detalhes da tarefa...'
                    className='max-h-40 h-28'
                  />
                </InputRoot>
              </FormField>
            )}
          />

          <Divider />
          <Text
            className='text-green-800'
            style={[
              scaledChecklisTitle,
              { fontFamily: TOKENS.FONT_FAMILY[fontType], fontWeight: "600" },
            ]}
          >
            CheckList
          </Text>

          <Checklist />

          <Divider />

          <Controller
            name='task-focus-time'
            render={({ field: { onChange, value } }) => (
              <FormField label='Tempo de foco(min)'>
                <InputRoot>
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder='Ex: 25 min'
                  />
                </InputRoot>
              </FormField>
            )}
          />

          <Controller
            name='task-rest-time'
            render={({ field: { onChange, value } }) => (
              <FormField label='Tempo de descanso(min)'>
                <InputRoot>
                  <InputField
                    value={value}
                    onChangeText={onChange}
                    placeholder='Ex: 5 min'
                  />
                </InputRoot>
              </FormField>
            )}
          />

          {/* Ações do Formulário */}
          <View className={cn("flex-row gap-3 mt-6")}>
            <Button
              variant='default'
              onPress={handleSubmit(onCreateTask as unknown as any)}
              className={cn("flex-1 py-3 px-5")}
              isLoading={isPendingTaskCreation}
            >
              {"Criar tarefa"}
            </Button>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onCancelAction}
              className={cn(
                "flex-1 py-3 rounded-lg items-center justify-center bg-neutral-200",
              )}
            >
              <Text className='text-base font-lexend-semi-bold text-neutral-1000'>
                Cancelar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SheetModal>
  );
};

