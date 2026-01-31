import { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import * as Haptics from "expo-haptics";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";
import { Button, ScreenHeader, TimerRing } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useTimerStore } from "@/presentation/store";
import { cn } from "@/utils/twClassnamesResolver";

const DEFAULT_ACTIVITY_TITLE = "Revisar documentos";
const DEFAULT_ACTIVITY_DESCRIPTION =
  "Revisar contratos do projeto e enviar feedback";

export interface FocusProps {
  activityTitle?: string;
  activityDescription?: string;
}

export function Focus({
  activityTitle = DEFAULT_ACTIVITY_TITLE,
  activityDescription = DEFAULT_ACTIVITY_DESCRIPTION,
}: FocusProps = {}) {
  const router = useRouter();
  const {
    timeRemaining,
    isActive,
    duration,
    start,
    pause,
    resume,
    setOnComplete,
  } = useTimerStore();

  const status = isActive ? "Em foco" : "Pausado";

  useEffect(() => {
    setOnComplete(() => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert(
        "Tempo esgotado",
        "O tempo do foco acabou.",
        [
          { text: "OK" },
          {
            text: "Reiniciar",
            onPress: () => useTimerStore.getState().start(),
          },
        ]
      );
    });
    return () => setOnComplete(null);
  }, [setOnComplete]);

  return (
    <View className={cn("flex-1 bg-blue-50")}>
      <StatusBar style="dark" backgroundColor={THEME_COLORS.focus.statusBar} />
      <ScreenHeader
        onBack={() => router.back()}
        title="Modo foco"
      />
      <View
        className={cn(
          "flex-1 items-center justify-center px-5"
        )}
      >
        <Text
          className={cn(
            "text-3xl font-lexend-bold text-neutral-1000 text-center mb-2"
          )}
        >
          {activityTitle}
        </Text>
        <Text
          className={cn(
            "text-base font-lexend-regular text-neutral-1000 text-center mb-8"
          )}
        >
          {activityDescription}
        </Text>
        <TimerRing
          timeRemaining={timeRemaining}
          totalTime={duration}
          status={status}
        />
        <Button
          variant="default"
          className="mt-24"
          onPress={isActive ? pause : resume}
          leftIcon={
            isActive ? (
              <MaterialIcons name="pause" size={22} color="#FFFFFF" />
            ) : (
              <MaterialIcons name="play-arrow" size={22} color="#FFFFFF" />
            )
          }
        >
          {isActive ? "Pausar" : "Retomar"}
        </Button>
      </View>
    </View>
  );
}
