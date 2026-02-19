import { MOCK_BOARDS } from "@/data/mocks";
import { BoardCard, Button } from "@/presentation/components";
import { THEME_COLORS, TOKENS } from "@/presentation/constants";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TextStyle, View } from "react-native";
import { CreateBoardModal, Header } from "./components";

export function Tasks() {
  const router = useRouter();
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const scaledTitle = useAccessibilityScale<TextStyle>(TOKENS.FONT_SIZE["2xl"]);
  const scaledSubTitle = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
  );

  const scaledButtonNewBoardSpacingY = useAccessibilityScale<number>(
    TOKENS.SPACING["md"],
    "number",
  );

  const scaledLgSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["lg"],
    "number",
  );

  const scaledTitleContainerSpacingY = useAccessibilityScale<number>(
    TOKENS.SPACING["xl"],
    "number",
  );

  const scaledGapHeader = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );

  const scaledAddBoardIconSize = useAccessibilityScale<number>(
    TOKENS.FONT_SIZE["2xl"],
    "number",
  );

  const { fontType } = useUserPreferencesStore();

  const handleCreateBoard = ({
    title,
    color,
  }: {
    title: string;
    color: string;
  }) => {
    const newId = `new-${Date.now()}`;
    router.push({
      pathname: "/details",
      params: { id: newId, title, color },
    });
    setCreateModalVisible(false);
  };

  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <CreateBoardModal
        snapPoints={[65, 90]}
        visible={createModalVisible}
        onClose={() => setCreateModalVisible(false)}
        onCreate={handleCreateBoard}
      />
      <Header />
      <View className={cn("flex-1")}>
        <View
          className={cn("border-b border-neutral-200 bg-neutral-0")}
          style={{
            paddingVertical: scaledTitleContainerSpacingY,
            paddingHorizontal: scaledLgSpacing,
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
            {MOCK_BOARDS?.length || 0} quadros ativos
          </Text>
        </View>

        <ScrollView
          className={cn("flex-1")}
          contentContainerStyle={{ padding: scaledLgSpacing }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ gap: scaledLgSpacing }}>
            {MOCK_BOARDS?.map((board) => (
              <BoardCard
                key={board.id}
                board={{ ...board, color: MOCK_BOARDS[0].color }}
                onPress={() =>
                  router.push({
                    pathname: "/details",
                    params: {
                      id: board.id,
                      title: board.title,
                      color: MOCK_BOARDS[0].color,
                    },
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
        <View
          className={cn("border-t border-neutral-200 bg-neutral-0")}
          style={{
            paddingVertical: scaledButtonNewBoardSpacingY,
            paddingHorizontal: scaledLgSpacing,
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

