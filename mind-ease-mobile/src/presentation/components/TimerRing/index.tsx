import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { THEME_COLORS } from "@/presentation/constants/theme";
import { cn } from "@/utils/twClassnamesResolver";
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
  const progress = Math.max(
    0,
    Math.min(1, totalTime > 0 ? timeRemaining / totalTime : 0)
  );

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const strokeDashoffset = circumference * (1 - progress);

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
          fill="transparent"
        />
        {progress > 0 && (
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke={progressColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
          />
        )}
      </Svg>
      <View className="items-center justify-center">
        <Text
          className={cn(
            "text-7xl font-lexend-bold tabular-nums text-neutral-950",
            timeClassName
          )}
        >
          {formatTime(timeRemaining)}
        </Text>
        <Text
          className={cn(
            "text-base font-lexend-regular text-neutral-600 mt-1",
            statusClassName
          )}
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
