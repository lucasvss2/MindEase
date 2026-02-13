import { CreateAccountPage } from "@/presentation/pages/CreateAccount";

import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateAccountScreen() {
  return (
    <SafeAreaView className='items-center justify-center flex-1 bg-blue-50'>
      <CreateAccountPage />
    </SafeAreaView>
  );
}

