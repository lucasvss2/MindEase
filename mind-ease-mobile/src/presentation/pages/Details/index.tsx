import { SECTION_CONTENT } from "@/data/mocks";
import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
  ScreenHeader,
} from "@/presentation/components";
import { CheckboxField } from "@/presentation/components/Checkbox/CheckboxField";
import { Empty } from "@/presentation/components/Empty";
import { THEME_COLORS } from "@/presentation/constants/theme";
import {
  useDeleteBoardMutation,
  useUpdateBoardMutation,
} from "@/presentation/features/Boards/board-queries";
import {
  useGetColumnBySlug,
  useGetColumns,
} from "@/presentation/features/Columns/columns-queries";
import { lightenHex } from "@/utils/colorUtils";
import { cn } from "@/utils/twClassnamesResolver";

import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { CreateColumnModal } from "./Column/Modal/CreateColumnModal";
import { EditColumnModal } from "./Column/Modal/EditColumnModal";
import { BoardModal } from "../Tasks/components/BoardModal";

const COLUMN_OPTIONS = [
  {
    key: "paraFazer" as const,
    label: "Para fazer",
    icon: "format-list-bulleted" as const,
  },
  {
    key: "paraFazer" as const,
    label: "Para fazer",
    icon: "format-list-bulleted" as const,
  },
  { key: "emProgresso" as const, label: "Em progresso", icon: "sync" as const },
  {
    key: "concluido" as const,
    label: "Concluído",
    icon: "check-circle-outline" as const,
  },
] as const;

type ColumnKey = (typeof COLUMN_OPTIONS)[number]["key"];

export function Details() {
  const router = useRouter();
  const { id, name, color } = useLocalSearchParams<{
    id: string;
    name: string;
    color?: string;
  }>();
  const headerColor = color ?? THEME_COLORS.neutral[300];
  const [visibleColumns, setVisibleColumns] = useState<{
    [key: string]: boolean;
  }>({});

  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateColumnModal, setShowCreateColumnModal] = useState(false);
  const [showEditColumnModal, setShowEditColumnModal] = useState(false);
  const { mutateAsync: mutateDeleteBoard } = useDeleteBoardMutation();
  const { mutateAsync: mutateUpdateBoard } = useUpdateBoardMutation();
  const { data: columns } = useGetColumns();
  const { data: columnBySlug } = useGetColumnBySlug(name);

  const form = useForm;

  console.log({ visibleColumns });
  const toggleColumn = (key: string) => {
    setVisibleColumns((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const onDeleteBoard = async () => {
    if (!id) return;
    await mutateDeleteBoard(id);
    router.back();
  };

  const onEditBoard = async ({
    name,
    color,
  }: {
    name?: string;
    color?: string;
  }) => {
    if (!id || !name) return;
    await mutateUpdateBoard({ id, data: { name, color } });
    setShowEditModal(false);
  };

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <FormProvider {...form()}>
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
          columnId={columnBySlug?.id ?? ""}
          boardId={id}
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
                  // TODO: Abrir fluxo de adicionar tarefa
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
                    id={name}
                    label={name}
                    isChecked={visibleColumns[name]}
                    onToggle={toggleColumn}
                  />
                ))}
              </View>
            </ScrollView>
          </View>
          <ScrollView
            className={cn("flex-1")}
            contentContainerStyle={{
              paddingHorizontal: 20,
              paddingTop: 12,
              paddingBottom: 24,
            }}
            showsVerticalScrollIndicator={false}
          >
            <View className={cn("gap-0")}>
              {!columns ? (
                <Empty message='Nenhuma coluna criada' />
              ) : (
                columns
                  ?.filter(({ name }) => visibleColumns[name])
                  .map(({ name }) => (
                    <View key={name} className={cn("py-3")}>
                      <View className={cn("flex-row items-center gap-2")}>
                        <MaterialIcons
                          name={
                            COLUMN_OPTIONS.find((o) => o.key === name)?.icon ??
                            "list"
                          }
                          size={22}
                          color={THEME_COLORS.neutral[1000]}
                        />
                        <View className={cn("flex-row")}>
                          <Text className='text-base font-lexend-semi-bold text-neutral-1000'>
                            {name}
                          </Text>
                          <Text className='text-base font-lexend-regular text-neutral-1000'>
                            {" "}
                            ({SECTION_CONTENT[key].items.length})
                          </Text>
                        </View>
                      </View>
                      <Card
                        className='mt-3 border-0 shadow-none gap-3'
                        style={{ backgroundColor: SECTION_CONTENT[name].bg }}
                      >
                        {SECTION_CONTENT[name].items.map((item, index) => (
                          <TouchableOpacity
                            key={index}
                            activeOpacity={0.7}
                            onPress={() => {}}
                          >
                            <Card
                              className={cn(
                                "bg-neutral-0 border border-neutral-200",
                              )}
                            >
                              <View className={cn("gap-1")}>
                                <Text className='text-sm font-lexend-semi-bold text-neutral-1000'>
                                  {item.title}
                                </Text>
                                <Text className='text-xs font-lexend-regular text-neutral-600'>
                                  {item.description}
                                </Text>
                                <Text className='text-xs font-lexend-regular text-neutral-600 mt-1'>
                                  {item.completed}/{item.total}
                                </Text>
                              </View>
                            </Card>
                          </TouchableOpacity>
                        ))}
                      </Card>
                    </View>
                  ))
              )}
            </View>
          </ScrollView>
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

