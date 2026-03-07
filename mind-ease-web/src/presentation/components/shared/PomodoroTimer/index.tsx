import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { usePomodoroSettings, showToast } from "@/presentation";
import * as S from "./styles";

const ALARM_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export function PomodoroTimer() {
  const { soundEnabled, notificationEnabled, pomodoroDuration } = usePomodoroSettings();
  const totalSeconds = pomodoroDuration * 60;

  const [timeLeft, setTimeLeft] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Refs para acessar valores atuais dentro do interval sem dependências obsoletas
  const soundEnabledRef = useRef(soundEnabled);
  const notificationEnabledRef = useRef(notificationEnabled);

  // Sincroniza refs após cada render (useLayoutEffect: síncrono, antes de qualquer paint)
  useLayoutEffect(() => {
    soundEnabledRef.current = soundEnabled;
    notificationEnabledRef.current = notificationEnabled;
  });

  // Padrão "setState durante render" — reseta o timer quando a duração muda (apenas se pausado)
  const [prevTotalSeconds, setPrevTotalSeconds] = useState(totalSeconds);
  if (prevTotalSeconds !== totalSeconds) {
    setPrevTotalSeconds(totalSeconds);
    if (!isRunning) {
      setTimeLeft(totalSeconds);
    }
  }

  // Ref guard: garante que os efeitos de conclusão disparam apenas 1x por sessão
  const completionFiredRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(ALARM_SOUND_URL);
    }
  }, []);

  // Decrementa o timer — sem side effects no updater
  useEffect(() => {
    if (!isRunning) return;

    completionFiredRef.current = false; // reseta a cada nova sessão iniciada

    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Dispara os alertas quando o timer zera — guarded para disparar exatamente 1x
  useEffect(() => {
    if (timeLeft !== 0 || completionFiredRef.current) return;
    completionFiredRef.current = true;

    setTimeout(() => {
      setIsRunning(false);
      if (soundEnabledRef.current && audioRef.current) {
        audioRef.current.play().catch(e => console.error("Error playing sound:", e));
      }
      if (soundEnabledRef.current) {
        showToast({
          type: 'success',
          message: 'Pomodoro finalizado!',
          description: 'Tempo esgotado! Hora de uma pausa.',
        });
      }
      if (notificationEnabledRef.current && Notification.permission === "granted") {
        new Notification("MindEase Pomodoro", {
          body: "Tempo esgotado! Hora de uma pausa.",
          icon: "/favicon.ico"
        });
      }
    }, 0);
  }, [timeLeft]);

  const handleStartPause = useCallback(() => {
    if (timeLeft === 0) return;
    setIsRunning((prev) => !prev);
  }, [timeLeft]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setTimeLeft(totalSeconds);
  }, [totalSeconds]);

  const progress = timeLeft / totalSeconds; // 1 → full, 0 → empty
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
