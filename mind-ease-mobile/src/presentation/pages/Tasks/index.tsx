import { BoardCard, Button } from "@/presentation/components";
import { Empty } from "@/presentation/components/Empty";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import {
  useCreateBoardMutation,
  useGetBoards,
} from "@/presentation/features/Boards/board-queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextStyle, View } from "react-native";
import { BoardModal, Header } from "./components";

export function Tasks() {
  const router = useRouter();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const { data: boards } = useGetBoards();
  const { mutateAsync: mutateCreateBoard, isPending: isCreatingBoard } =
    useCreateBoardMutation();
  const scaledTitle = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE["2xl"]);
  const scaledSubTitle = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );
  const scaledBoardListSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledButtonNewBoardSpacingY = useAccessibilityScale<number>(
    TOKENS.SPACING["md"],
    "number",
  );

  const scaledButtonNewBoardSpacingX = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledTitleContainerSpacingY = useAccessibilityScale<number>(
    TOKENS.SPACING["xl"],
    "number",
  );

  const scaledTitleContainerSpacingX = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledGapHeader = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );

  const scaledGapBordList = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledAddBoardIconSize = useAccessibilityScale<number>(
    TOKENS.FONT_SIZE["2xl"],
    "number",
  );

  const { fontType } = useUserPreferencesStore();

  const handleCreateBoard = async ({
    name,
    color,
    description,
  }: {
    name?: string;
    color?: string;
    description?: string;
  }) => {
    if (!name || !color) return;

    await mutateCreateBoard({
      data: { name, description: description ?? '', color },
    });

    setCreateModalVisible(false);
  };

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <BoardModal
        snapPoints={[65, 90]}
        visible={createModalVisible}
        onCancel={() => setCreateModalVisible(false)}
        onSubmit={handleCreateBoard}
        isLoading={isCreatingBoard}
      />
      <Header />
      <View className={cn("flex-1")}>
        <View
          className={cn("border-b border-neutral-200 bg-neutral-0")}
          style={{
            paddingVertical: scaledTitleContainerSpacingY,
            paddingHorizontal: scaledTitleContainerSpacingX,
            gap: scaledGapHeader,
          }}
        >
          <Text
            className='text-neutral-1000'
            style={[scaledTitle, { fontFamily: fontType, fontWeight: 600 }]}
          >
            Meus quadros
          </Text>

          <Text
            className='text-neutral-600'
            style={[scaledSubTitle, { fontFamily: fontType, fontWeight: 400 }]}
          >
            {boards?.length || 0} quadros ativos
          </Text>
        </View>

        <ScrollView
          className={cn("flex-1")}
          contentContainerStyle={{ padding: scaledBoardListSpacing }}
          showsVerticalScrollIndicator={false}
        >
          {boards?.length === 0 ? (
            <Empty message='Nenhum quadro criado!' />
          ) : (
            <View style={{ gap: scaledGapBordList }}>
              {boards?.map((board) => (
                <BoardCard key={board.id} board={{ ...board }} />
              ))}
            </View>
          )}
        </ScrollView>
        <View
          className={cn("border-t border-neutral-200 bg-neutral-0")}
          style={{
            paddingVertical: scaledButtonNewBoardSpacingY,
            paddingHorizontal: scaledButtonNewBoardSpacingX,
          }}
        >
          <Button
            activeOpacity={0.7}
            onPress={() => setCreateModalVisible(true)}
            variant='dashed'
            leftIcon={
              <MaterialIcons
                name='add'
                size={scaledAddBoardIconSize}
                color={THEME_COLORS.neutral[1000]}
              />
            }
          >
            Criar novo quadro
          </Button>
        </View>
      </View>
    </View>
  );
}

