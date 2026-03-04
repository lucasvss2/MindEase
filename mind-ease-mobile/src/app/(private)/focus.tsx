import { Focus } from "@/presentation/pages/Focus";
import { useLocalSearchParams } from "expo-router";

export default function FocusScreen() {
  const { activityTitle, activityDescription } = useLocalSearchParams<{
    activityTitle?: string;
    activityDescription?: string;
  }>();

  return (
    <Focus
      activityTitle={activityTitle}
      activityDescription={activityDescription}
    />
  );
}
