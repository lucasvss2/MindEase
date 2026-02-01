import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BoardCard } from "@/presentation/components";
import { MOCK_BOARDS } from "@/data/mocks";
import { cn } from "@/utils/twClassnamesResolver";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { Header } from "./components";

export function Tasks() {
  return (
    <View className={cn("flex-1 bg-neutral-0")}>
      <Header />
      <View className={cn("flex-1")}>
        <View className={cn("px-5 pt-6 pb-6 border-b border-neutral-200 bg-neutral-0")}>
          <Text className="text-3xl font-lexend-semi-bold text-neutral-1000">
            Meus quadros
          </Text>
          <Text className="text-base font-lexend-regular text-neutral-600 mt-1">
            7 quadros ativos
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
                onPress={() => {
                  // TODO: Navegar para detalhes do quadro (ex.: router.push(`/board/${board.id}`))
                }}
              />
            ))}
          </View>
        </ScrollView>
        <View
          className={cn(
            "border-t border-neutral-200 bg-neutral-0 px-5 py-4"
          )}
        >
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              // TODO: Navegar para criação de quadro ou abrir modal
            }}
            className={cn(
              "w-full py-5 rounded-lg border-2 border-neutral-300 items-center justify-center"
            )}
            style={{ borderStyle: "dashed" }}
          >
            <View className="flex-row items-center gap-2">
              <MaterialIcons
                name="add"
                size={22}
                color={THEME_COLORS.neutral[1000]}
              />
              <Text className="text-base font-lexend-semi-bold text-neutral-1000">
                Criar novo quadro
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
