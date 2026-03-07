import { BoardCard } from "@/presentation/components";
import { Empty } from "@/presentation/components/Empty";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { TOKENS } from "@/presentation/constants/tokens";
import {
  useCreateBoardMutation,
  useGetBoards,
} from "@/presentation/features/Boards/board-queries";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";
import { BoardModal, Header } from "./components";

export function Menu() {
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const { data: boards } = useGetBoards();
  const { mutateAsync: mutateCreateBoard, isPending: isCreatingBoard } =
    useCreateBoardMutation();
  const { activeProfileId, study, work } = useUserPreferencesStore();
  const { fontType, enableSummaryMode } = activeProfileId === "study" ? study : work;

  const scaledGapBoardList = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledBoardListSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledFontSize2xl = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["2xl"],
  );

  const scaledFontSizeSm = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["sm"],
  );

  const fontFamily = TOKENS.FONT_FAMILY[fontType];

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
      data: { name, description: description ?? "", color },
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
          className={cn(
            "px-5 pt-6 pb-6 border-b border-neutral-200 bg-neutral-0",
          )}
        >
          <Text
            className='
             text-neutral-1000'
            style={[{ fontFamily, fontWeight: 700 }, scaledFontSize2xl]}
          >
            Meus quadros
          </Text>

          {!enableSummaryMode && (
            <Text
              className='text-neutral-600 mt-1'
              style={[{ fontFamily }, scaledFontSizeSm]}
            >
              {boards?.length} quadros ativos
            </Text>
          )}
        </View>
        <ScrollView
          className={cn("flex-1")}
          contentContainerStyle={{ padding: scaledBoardListSpacing }}
          showsVerticalScrollIndicator={false}
        >
          {boards?.length === 0 ? (
            <Empty message='Nenhum quadro criado!' />
          ) : (
            <View style={{ gap: scaledGapBoardList }}>
              {boards?.map((board) => (
                <BoardCard key={board.id} board={{ ...board }} />
              ))}
            </View>
          )}
        </ScrollView>
        <View
          className={cn("border-t border-neutral-200 bg-neutral-0 px-5 py-4")}
          accessible={false}
          accessibilityRole='none'
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setCreateModalVisible(true)}
            accessibilityRole='button'
            accessibilityLabel='Criar novo quadro'
            accessibilityHint='Abre o formulário para criar um novo quadro'
            style={{
              width: "100%",
              minHeight: 56,
              paddingVertical: 20,
              paddingHorizontal: 20,
              borderRadius: 8,
              borderWidth: 2,
              borderStyle: "dashed",
              borderColor: THEME_COLORS.neutral[300],
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: THEME_COLORS.neutral[0],
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}
            >
              <MaterialIcons
                name='add'
                size={22}
                color={THEME_COLORS.neutral[1000]}
              />

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Lexend_600SemiBold",
                  color: THEME_COLORS.neutral[1000],
                  flexShrink: 0,
                }}
              >
                {enableSummaryMode ? 'Novo quadro':'Criar novo quadro'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

