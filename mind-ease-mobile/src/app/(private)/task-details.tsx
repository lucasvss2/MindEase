import { TaskDetailsPage } from "@/presentation/pages/TaskDetails";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function TaskDetailsScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <TaskDetailsPage />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

