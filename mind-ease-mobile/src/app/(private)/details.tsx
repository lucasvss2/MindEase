import { Details } from "@/presentation/pages/Details";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function DetailsScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <Details />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

