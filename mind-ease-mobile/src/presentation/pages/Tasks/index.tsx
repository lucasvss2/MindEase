import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { cn } from "@/utils/twClassnamesResolver";

export function Tasks() {
  const router = useRouter();

  return (
    <View className={cn("flex-1 bg-neutral-0 px-5 py-6")}>
      <Text className="text-xl font-lexend-semi-bold text-neutral-1000">
        Tarefas
      </Text>
      <TouchableOpacity
        onPress={() => router.push("/focus")}
        className="mt-4 p-3 rounded-md bg-blue-100 border border-blue-400 active:bg-blue-200"
      >
        <Text className="text-base font-lexend-medium text-neutral-1000">
          Ir para Focus
        </Text>
      </TouchableOpacity>
    </View>
  );
}
