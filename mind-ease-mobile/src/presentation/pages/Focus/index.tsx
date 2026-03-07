import { Button, ScreenHeader, TimerRing } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { TOKENS } from "@/presentation/constants/tokens";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import { useTimerStore } from "@/presentation/store";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { MaterialIcons } from "@expo/vector-icons";
import {
  startAlertSoundLoop,
  stopAlertSound,
} from "@/utils/playAlertSound";
import * as Haptics from "expo-haptics";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Text, TextStyle, View } from "react-native";
import { Toast } from "toastify-react-native";

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
    restDurationMinutes,
    enableSoftSounds = true,
  } = useTimerStore();

  const [mode, setMode] = useState<"focus" | "rest">("focus");
  const [restTimeRemaining, setRestTimeRemaining] = useState(
    restDurationMinutes * 60
  );
  const hasShownRestWarning = useRef(false);
  const hasShownRestComplete = useRef(false);
  const wasSoundPlaying = useRef(false);

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
    start();
  }, [start]);

  useEffect(() => {
    return () => {
      stopAlertSound();
    };
  }, []);

  const progress = duration > 0 ? timeRemaining / duration : 0;
  const shouldPlaySound =
    mode === "focus" &&
    isActive &&
    progress <= 0.1 &&
    enableSoftSounds;

  useEffect(() => {
    if (mode !== "focus" || !isActive) return;
    if (progress <= 0.1 && !hasShownRestWarning.current) {
      hasShownRestWarning.current = true;
      Toast.warn("Quase lá! Prepare-se para um breve descanso", "top");
    }
  }, [mode, isActive, progress]);

  useEffect(() => {
    if (shouldPlaySound && !wasSoundPlaying.current) {
      wasSoundPlaying.current = true;
      startAlertSoundLoop();
    } else if (!shouldPlaySound && wasSoundPlaying.current) {
      wasSoundPlaying.current = false;
      stopAlertSound();
    }
  }, [shouldPlaySound]);

  useEffect(() => {
    setOnComplete(() => {
      stopAlertSound();
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setMode("rest");
      setRestTimeRemaining(restDurationMinutes * 60);
    });
    return () => setOnComplete(null);
  }, [setOnComplete, restDurationMinutes]);

  useEffect(() => {
    if (mode !== "rest") return;

    const intervalId = setInterval(() => {
      setRestTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(intervalId);
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          router.back();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [mode, router]);

  useEffect(() => {
    if (mode === "rest") {
      setRestTimeRemaining(restDurationMinutes * 60);
    }
  }, [mode, restDurationMinutes]);

  useEffect(() => {
    if (mode !== "rest") return;
    const totalRest = restDurationMinutes * 60;
    const progress = totalRest > 0 ? restTimeRemaining / totalRest : 0;
    if (progress <= 0.05 && !hasShownRestComplete.current) {
      hasShownRestComplete.current = true;
      Toast.show({
        type: "success",
        text1: "Seção concluída!",
        text2: "Você será redirecionado aos detalhes automaticamente.",
        position: "top",
        visibilityTime: 6000,
      });
    }
  }, [mode, restTimeRemaining, restDurationMinutes]);

  if (mode === "rest") {
    return (
      <View
        className={cn("flex-1")}
        style={{ backgroundColor: THEME_COLORS.rest.background }}
      >
        <StatusBar
          style="dark"
          backgroundColor={THEME_COLORS.rest.statusBar}
        />
        <ScreenHeader
          onBack={() => router.back()}
          title="Modo foco"
        />
        <View
          className={cn("flex-1 items-center justify-center")}
          style={{ paddingHorizontal: scaledSpacingLgSize }}
        >
          <Text
            className={cn("text-neutral-1000 text-center")}
            style={[
              scaledText3xlSize,
              {
                fontFamily: TOKENS.FONT_FAMILY[fontType],
                fontWeight: 700,
                marginBottom: scaledSpacingXsSize,
              },
            ]}
          >
            Hora de desconectar
          </Text>
          <Text
            className={cn("text-neutral-1000 text-center")}
            style={[
              scaledTextBaseSize,
              {
                fontFamily: TOKENS.FONT_FAMILY[fontType],
                fontWeight: 400,
                marginBottom: scaledSpacing2xlSize,
              },
            ]}
          >
            Aproveite sua pausa.
          </Text>
          <TimerRing
            timeRemaining={restTimeRemaining}
            totalTime={restDurationMinutes * 60}
            status="Descansando"
            progressColor="#22C55E"
          />
          <Button
            variant="default"
            style={{ marginTop: scaledSpacing6xlSize }}
            onPress={() => router.back()}
          >
            Pular descanso
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View className={cn("flex-1 bg-blue-50")}>
      <StatusBar style="dark" backgroundColor={THEME_COLORS.focus.statusBar} />
      <ScreenHeader
        onBack={() => router.back()}
        title={activityTitle || "Modo foco"}
      />
      <View
        className={cn("flex-1 items-center justify-center")}
        style={{ paddingHorizontal: scaledSpacingLgSize }}
      >
        <Text
          className={cn("text-neutral-1000 text-center")}
          style={[
            scaledText3xlSize,
            {
              fontFamily: TOKENS.FONT_FAMILY[fontType],
              fontWeight: 700,
              marginBottom: scaledSpacingXsSize,
            },
          ]}
        >
          {activityTitle}
        </Text>
        <Text
          className={cn("text-neutral-1000 text-center")}
          style={[
            scaledTextBaseSize,
            {
              fontFamily: TOKENS.FONT_FAMILY[fontType],
              fontWeight: 400,
              marginBottom: scaledSpacing2xlSize,
            },
          ]}
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
          style={{ marginTop: scaledSpacing6xlSize }}
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
