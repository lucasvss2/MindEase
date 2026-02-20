import { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { BoardCard } from "@/presentation/components";
import { MOCK_BOARDS } from "@/data/mocks";
import { cn } from "@/utils/twClassnamesResolver";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { CreateBoardModal, Header } from "./components";

export function Menu() {
  const router = useRouter();
  const [createModalVisible, setCreateModalVisible] = useState(false);

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
        <View className={cn("px-5 pt-6 pb-6 border-b border-neutral-200 bg-neutral-0")}>
          <Text className="text-3xl font-lexend-bold text-neutral-1000">
            Meus quadros
          </Text>
          <Text className="text-base font-lexend-regular text-neutral-600 mt-1">
            {MOCK_BOARDS.length} quadros ativos
          </Text>
        </View>
        <ScrollView
          className={cn("flex-1")}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className={cn("gap-5")}>
            {MOCK_BOARDS.map((board) => (
              <BoardCard
                key={board.id}
                board={board}
                onPress={() =>
                  router.push({
                    pathname: "/details",
                    params: { id: board.id, title: board.title, color: board.color },
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
        <View
          className={cn(
            "border-t border-neutral-200 bg-neutral-0 px-5 py-4"
          )}
          accessible={false}
          accessibilityRole="none"
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setCreateModalVisible(true)}
            accessibilityRole="button"
            accessibilityLabel="Criar novo quadro"
            accessibilityHint="Abre o formulário para criar um novo quadro"
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
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <MaterialIcons
                name="add"
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
                Criar novo quadro
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
