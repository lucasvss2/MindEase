import { useState, useEffect, useCallback, useRef } from "react";
import { usePomodoroSettings } from "@/presentation";
import * as S from "./styles";

const POMODORO_DURATION = 25 * 60; // 25 minutes in seconds
const ALARM_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(POMODORO_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const { soundEnabled, notificationEnabled } = usePomodoroSettings();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(ALARM_SOUND_URL);
    }
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft === 0) {
      setIsRunning(false);

      // Trigger Alerts
      if (soundEnabled && audioRef.current) {
        audioRef.current.play().catch(e => console.error("Error playing sound:", e));
      }

      if (notificationEnabled && Notification.permission === "granted") {
        new Notification("MindEase Pomodoro", {
          body: "Tempo esgotado! Hora de uma pausa.",
          icon: "/favicon.ico" // Assuming favicon exists
        });
      }

      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStartPause = useCallback(() => {
    if (timeLeft === 0) return;
    setIsRunning((prev) => !prev);
  }, [timeLeft]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(POMODORO_DURATION);
  }, []);

  const progress = timeLeft / POMODORO_DURATION; // 1 → full, 0 → empty
  const radius = 106;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  const status = timeLeft === 0 ? "Concluído" : isRunning ? "Em progresso" : "Pausado";

  return (
    <S.TimerWrapper>
      <S.CircleContainer>
        {/* Background track */}
        <S.TimerSvg width="240" height="240" viewBox="0 0 240 240">
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="#efefef"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          {/* Progress arc */}
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke="#7ecec4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 1s linear" }}
          />
        </S.TimerSvg>

        {/* Dot indicator at top of circle */}
        <S.Dot style={{ opacity: timeLeft === 0 ? 0 : 1 }} />

        <S.TimeDisplay>
          <S.Time>{formatTime(timeLeft)}</S.Time>
          <S.StatusLabel>{status}</S.StatusLabel>
        </S.TimeDisplay>
      </S.CircleContainer>

      <S.ButtonRow>
        <S.StartButton onClick={handleStartPause} disabled={timeLeft === 0}>
          {isRunning ? (
            /* Pause icon */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
          {isRunning ? "Pausar" : "Iniciar"}
        </S.StartButton>

        <S.ResetButton onClick={handleReset}>
          {/* Reset/refresh icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
          </svg>
          Reiniciar
        </S.ResetButton>
      </S.ButtonRow>
    </S.TimerWrapper>
  );
}
