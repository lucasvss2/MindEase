import { Button, ScreenHeader, TimerRing } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { useTimerStore } from "@/presentation/store";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Alert, Text, TextStyle, View } from "react-native";

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

  const { fontType } = useUserPreferencesStore();
  const scaledTextBaseSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE.base,
    "font",
  );
  
    const scaledText3xlSize = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["3xl"],
    "font",
  );
  

    const scaledSpacingLgSize = useAccessibilityScale<number>(
    TOKENS.SPACING.lg,
    "number",
  ); 

      const scaledSpacing2xlSize = useAccessibilityScale<number>(
    TOKENS.SPACING["2xl"],
    "number",
  ); 

  const scaledSpacingXsSize = useAccessibilityScale<number>(
    TOKENS.SPACING.xs,
    "number",
  ); 

    const scaledSpacing6xlSize = useAccessibilityScale<number>(
    TOKENS.SPACING["6xl"],
    "number",
  ); 



  const status = isActive ? "Em foco" : "Pausado";

  useEffect(() => {
    setOnComplete(() => {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      Alert.alert("Tempo esgotado", "O tempo do foco acabou.", [
        { text: "OK" },
        {
          text: "Reiniciar",
          onPress: () => useTimerStore.getState().start(),
        },
      ]);
    });
    return () => setOnComplete(null);
  }, [setOnComplete]);

  return (
    <View className={cn("flex-1 bg-blue-50")}>
      <StatusBar style='dark' backgroundColor={THEME_COLORS.focus.statusBar} />
      <ScreenHeader onBack={() => router.back()} title='Modo foco' />
      <View className={cn("flex-1 items-center justify-center")} style={{
         paddingHorizontal: scaledSpacingLgSize
      }}>
        <Text
          className={cn("text-neutral-1000 text-center")}
          style={[scaledText3xlSize, { fontFamily: fontType, fontWeight: 700, marginBottom: scaledSpacingXsSize }]}
        >
          {activityTitle}
        </Text>
        <Text
          className={cn("text-neutral-1000 text-center")}
          style={[scaledTextBaseSize, { fontFamily: fontType, fontWeight: 400, marginBottom: scaledSpacing2xlSize }]}
        >
          {activityDescription}
        </Text>
        <TimerRing
          timeRemaining={timeRemaining}
          totalTime={duration}
          status={status}
        />
        <Button
          variant='default'
         style={{ marginTop: scaledSpacing6xlSize }}
          onPress={isActive ? pause : resume}
          leftIcon={
            isActive ? (
              <MaterialIcons name='pause' size={22} color='#FFFFFF' />
            ) : (
              <MaterialIcons name='play-arrow' size={22} color='#FFFFFF' />
            )
          }
        >
          {isActive ? "Pausar" : "Retomar"}
        </Button>
      </View>
    </View>
  );
}

