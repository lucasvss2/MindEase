import { Tasks } from "@/presentation/pages/Tasks";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TasksScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1">
        <Tasks />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

