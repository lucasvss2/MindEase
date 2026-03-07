import { TOKENS } from "@/presentation/constants";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { useAccessibilityScale } from "@/presentation/hooks/useAccessibilityScale";
import useUserPreferencesStore from "@/presentation/store/useUserPreferencesStore";
import { cn } from "@/utils/twClassnamesResolver";
import { StyleSheet, Text, TextStyle, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { ITimerRingProps } from "./interface";

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function TimerRing({
  timeRemaining,
  totalTime,
  status = "Pausado",
  ringColor = THEME_COLORS.timerRing.ring,
  progressColor = THEME_COLORS.timerRing.progress,
  size = 280,
  strokeWidth = 16,
  className,
  timeClassName,
  statusClassName,
}: ITimerRingProps) {
  const { activeProfileId, study, work } = useUserPreferencesStore();

  const { fontType } = activeProfileId === "study" ? study : work;
  
  const progress = Math.max(
    0,
    Math.min(1, totalTime > 0 ? timeRemaining / totalTime : 0),
  );
  const isUrgent = progress <= 0.1;
  const effectiveProgressColor = isUrgent
    ? THEME_COLORS.timerRing.urgent
    : progressColor;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const strokeDashoffset = circumference * (1 - progress);
  const fontFamily = TOKENS.FONT_FAMILY[fontType];

  const scaledText7Xl = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["7xl"],
  );

  const scaledTextBase = useAccessibilityScale<TextStyle>(
    TOKENS.FONT_SIZE["base"],
  );

  const scaled3xsSpacing = useAccessibilityScale<number>(
    TOKENS.SPACING["2xs"],
    "number",
  );
  
  return (
    <View
      className={cn("items-center justify-center", className)}
      style={[styles.container, { width: size, height: size }]}
    >
      <Svg width={size} height={size} style={styles.svg}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          stroke={ringColor}
          strokeWidth={strokeWidth}
          fill='transparent'
        />
        {progress > 0 && (
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={effectiveProgressColor}
            strokeWidth={strokeWidth}
            fill='transparent'
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
            transform={`rotate(-90 ${center} ${center})`}
          />
        )}
      </Svg>
      <View className='items-center justify-center'>
        <Text
          className={cn("tabular-nums text-neutral-950", timeClassName)}
          style={[{ fontFamily, fontWeight: 700 }, scaledText7Xl]}
        >
          {formatTime(timeRemaining)}
        </Text>
        <Text
          className={cn(" text-neutral-600", statusClassName)}
          style={[{ fontFamily, marginTop: scaled3xsSpacing }, scaledTextBase]}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  svg: {
    position: "absolute",
  },
});

