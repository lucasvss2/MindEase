import {
  Button,
  Dropdown,
  DropdownItem,
  ScreenHeader,
} from "@/presentation/components";
import { CheckboxField } from "@/presentation/components/Checkbox/CheckboxField";
import { THEME_COLORS } from "@/presentation/constants/theme";
import {
  useDeleteBoardMutation,
  useUpdateBoardMutation,
} from "@/presentation/features/Boards/board-queries";
import { useGetColumnsByBoardId } from "@/presentation/features/Columns/columns-queries";
import { lightenHex } from "@/utils/colorUtils";
import { cn } from "@/utils/twClassnamesResolver";

import { useColumnStore } from "@/presentation/store/useColumnStore";
import { MaterialIcons } from "@expo/vector-icons";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, View } from "react-native";
import { BoardModal } from "../Tasks/components/BoardModal";
import { CreateColumnModal } from "./Column/Modal/CreateColumnModal";
import { EditColumnModal } from "./Column/Modal/EditColumnModal";
import { TasksColumn } from "./Column/TasksColumn";

export function Details() {
  const router = useRouter();
  const {
    id: boardId,
    name,
    color,
  } = useLocalSearchParams<{
    id: string;
    name: string;
    color?: string;
  }>();
  const headerColor = color ?? THEME_COLORS.neutral[300];

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateColumnModal, setShowCreateColumnModal] = useState(false);
  const [showEditColumnModal, setShowEditColumnModal] = useState(false);
  const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);
  const { mutateAsync: mutateDeleteBoard } = useDeleteBoardMutation();
  const { mutateAsync: mutateUpdateBoard } = useUpdateBoardMutation();
  const { data: columns } = useGetColumnsByBoardId(boardId);

  const { toggleColumn, selectionsByBoard } = useColumnStore();

  const taskForm = useForm();
  const queryClient = useQueryClient();
  const currentBoardVisibleMap = selectionsByBoard[boardId] || {};

  const activeIds = Object.keys(currentBoardVisibleMap).filter(
    (id) => currentBoardVisibleMap[id] === true,
  );

  const validatedActiveIds = activeIds.filter((id) =>
    columns?.some((col) => col.id === id),
  );
  const onDeleteBoard = async () => {
    if (!boardId) return;
    await mutateDeleteBoard(boardId);
    router.back();
  };

  const onEditBoard = async ({
    name,
    color,
  }: {
    name?: string;
    color?: string;
  }) => {
    if (!boardId || !name) return;
    await mutateUpdateBoard({ id: boardId, data: { name, color } });
    setShowEditModal(false);
  };

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <FormProvider {...taskForm}>
        <BoardModal
          name={name}
          color={color}
          snapPoints={[65, 90]}
          visible={showEditModal}
          onCancel={() => setShowEditModal(false)}
          onSubmit={onEditBoard}
          isEditing
        />
        <CreateColumnModal
          boardId={boardId}
          visible={showCreateColumnModal}
          setVisible={setShowCreateColumnModal}
        />

        <EditColumnModal
          columns={columns!}
          visible={showEditColumnModal}
          onClose={() => setShowEditColumnModal(false)}
        />

        <ScreenHeader
          onBack={() => router.back()}
          title={name ?? "Detalhes"}
          titlePrefix={
            <View
              className='rounded-full items-center justify-center ml-2'
              style={{
                width: 29,
                height: 29,
                borderRadius: 14.5,
                backgroundColor: lightenHex(headerColor),
              }}
            >
              <View
                className='rounded-full'
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  backgroundColor: headerColor,
                }}
              />
            </View>
          }
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
            >
              <DropdownItem onPress={() => setShowEditModal(true)}>
                <Text className='text-sm font-lexend-regular text-neutral-1000'>
                  Editar quadro
                </Text>
              </DropdownItem>

              <DropdownItem onPress={onDeleteBoard}>
                <Text className='text-sm font-lexend-regular text-neutral-1000'>
                  Excluir quadro
                </Text>
              </DropdownItem>

              <DropdownItem
                onPress={() => {
                  setShowCreateTaskModal(true);
                }}
              >
                <Text className='text-sm font-lexend-regular text-neutral-1000'>
                  Adicionar tarefa
                </Text>
              </DropdownItem>
            </Dropdown>
          }
          className='bg-neutral-0 border-neutral-200'
        />
        <View className={cn("flex-1")}>
          <View
            className={cn(
              "px-5 pt-6 pb-6 border-b border-neutral-200 bg-neutral-0",
            )}
          >
            <Text className='text-base font-lexend-regular text-neutral-600'>
              {columns && columns?.length > 0
                ? "Colunas visíveis"
                : "Nenhuma coluna criada"}
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
              <View className={cn("flex-row gap-4 mt-3 flex-nowrap")}>
                {columns?.map(({ name, id }) => (
                  <CheckboxField
                    key={id}
                    label={name}
                    isChecked={!!currentBoardVisibleMap[id]}
                    onToggle={() => toggleColumn(boardId, id)} //ATUALIZAR TBM O NOME
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          <ScrollView className='flex-1 px-5'>
            {validatedActiveIds?.map((id) => {
              const columnData = columns?.find((c) => c.id === id);
              return (
                <TasksColumn
                  key={id}
                  boardId={boardId}
                  columnId={id}
                  columnName={columnData?.name ?? ""}
                />
              );
            })}
          </ScrollView>{" "}
        </View>

        <View>
          <View
            className={cn("border-t border-neutral-200 bg-neutral-0")}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <Button
              activeOpacity={0.7}
              onPress={() => setShowCreateColumnModal(true)}
              variant='dashed'
              // isLoading={isCreatingBoard}
              leftIcon={
                <MaterialIcons
                  name='add'
                  size={30}
                  color={THEME_COLORS.neutral[1000]}
                />
              }
            >
              Criar nova coluna
            </Button>
          </View>

          <View
            className={cn("border-t border-neutral-200 bg-neutral-0")}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <Button
              activeOpacity={0.7}
              onPress={() => setShowEditColumnModal(true)}
              variant='dashed'
              // isLoading={isCreatingBoard}
              leftIcon={
                <MaterialIcons
                  name='add'
                  size={30}
                  color={THEME_COLORS.neutral[1000]}
                />
              }
            >
              Editar colunas
            </Button>
          </View>
        </View>
      </FormProvider>
    </View>
  );
}

