import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { usePomodoroSettings, showToast } from "@/presentation";
import * as S from "./styles";

const ALARM_SOUND_URL = "https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3";

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function getProgressColor(progress: number, phase: 'work' | 'break'): string {
  if (phase === 'break') {
    if (progress > 0.5) return '#80DED9';
    if (progress > 0.25) return '#B8A9E0';
    if (progress > 0.1) return '#FF85BB';
    return '#FFAD85';
  }
  if (progress > 0.5) return '#80DED9';
  if (progress > 0.25) return '#FFD94A';
  if (progress > 0.1) return '#FFAD85';
  return '#FF7070';
}

export function PomodoroTimer() {
  const { soundEnabled, notificationEnabled, pomodoroDuration, breakDuration } = usePomodoroSettings();

  const [phase, setPhase] = useState<'work' | 'break'>('work');
  const [timeLeft, setTimeLeft] = useState(pomodoroDuration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const soundEnabledRef = useRef(soundEnabled);
  const notificationEnabledRef = useRef(notificationEnabled);
  const phaseRef = useRef(phase);
  const breakDurationRef = useRef(breakDuration);
  const workDurationRef = useRef(pomodoroDuration);

  useLayoutEffect(() => {
    soundEnabledRef.current = soundEnabled;
    notificationEnabledRef.current = notificationEnabled;
    phaseRef.current = phase;
    breakDurationRef.current = breakDuration;
    workDurationRef.current = pomodoroDuration;
  });

  const [prevWorkDuration, setPrevWorkDuration] = useState(pomodoroDuration);
  if (prevWorkDuration !== pomodoroDuration) {
    setPrevWorkDuration(pomodoroDuration);
    if (!isRunning && phase === 'work') {
      setTimeLeft(pomodoroDuration * 60);
    }
  }

  const [prevBreakDuration, setPrevBreakDuration] = useState(breakDuration);
  if (prevBreakDuration !== breakDuration) {
    setPrevBreakDuration(breakDuration);
    if (!isRunning && phase === 'break') {
      setTimeLeft(breakDuration * 60);
    }
  }

  const completionFiredRef = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(ALARM_SOUND_URL);
    }
  }, []);

  useEffect(() => {
    if (!isRunning) return;
    completionFiredRef.current = false;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (timeLeft !== 0 || completionFiredRef.current) return;
    completionFiredRef.current = true;

    setTimeout(() => {
      const currentPhase = phaseRef.current;

      if (soundEnabledRef.current && audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => console.error("Error playing sound:", e));
      }

      if (currentPhase === 'work') {
        if (soundEnabledRef.current) {
          showToast({
            type: 'success',
            message: 'Pomodoro finalizado!',
            description: 'Hora de uma pausa. Iniciando descanso...',
          });
        }
        if (notificationEnabledRef.current && Notification.permission === "granted") {
          new Notification("MindEase Pomodoro", {
            body: "Pomodoro finalizado! Hora de uma pausa.",
            icon: "/favicon.ico",
          });
        }
        completionFiredRef.current = false;
        setPhase('break');
        setTimeLeft(breakDurationRef.current * 60);
      } else {
        if (soundEnabledRef.current) {
          showToast({
            type: 'info',
            message: 'Pausa finalizada!',
            description: 'Pronto para mais um foco!',
          });
        }
        if (notificationEnabledRef.current && Notification.permission === "granted") {
          new Notification("MindEase Pomodoro", {
            body: "Pausa finalizada! Pronto para mais um foco.",
            icon: "/favicon.ico",
          });
        }
        setPhase('work');
        setTimeLeft(workDurationRef.current * 60);
        setIsRunning(false);
      }
    }, 0);
  }, [timeLeft]);

  const totalSeconds = phase === 'work' ? pomodoroDuration * 60 : breakDuration * 60;

  const handleStartPause = useCallback(() => {
    if (timeLeft === 0) return;
    setIsRunning((prev) => !prev);
  }, [timeLeft]);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setPhase('work');
    setTimeLeft(pomodoroDuration * 60);
  }, [pomodoroDuration]);

  const progress = timeLeft / totalSeconds;
  const radius = 106;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);
  const ringColor = getProgressColor(progress, phase);

  const statusText = timeLeft === 0 ? "Concluído" : isRunning ? "Em progresso" : "Pausado";
  const phaseLabel = phase === 'work' ? 'Foco' : 'Pausa';

  return (
    <S.TimerWrapper>
      <S.PhaseLabel $phase={phase}>{phaseLabel}</S.PhaseLabel>

      <S.CircleContainer>
        <S.TimerSvg width="240" height="240" viewBox="0 0 240 240">
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="#efefef"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          <circle
            cx="120"
            cy="120"
            r={radius}
            fill="none"
            stroke={ringColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: "stroke-dashoffset 1s linear, stroke 0.5s ease" }}
          />
        </S.TimerSvg>

        <S.Dot style={{ opacity: timeLeft === 0 ? 0 : 1, backgroundColor: ringColor }} />

        <S.TimeDisplay>
          <S.Time>{formatTime(timeLeft)}</S.Time>
          <S.StatusLabel>{statusText}</S.StatusLabel>
        </S.TimeDisplay>
      </S.CircleContainer>

      <S.ButtonRow>
        <S.StartButton onClick={handleStartPause} disabled={timeLeft === 0} $color={ringColor}>
          {isRunning ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5,3 19,12 5,21" />
            </svg>
          )}
          {isRunning ? "Pausar" : "Iniciar"}
        </S.StartButton>

        <S.ResetButton onClick={handleReset}>
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
