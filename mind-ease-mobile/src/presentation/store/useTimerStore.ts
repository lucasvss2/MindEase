import { create } from "zustand";

const DEFAULT_FOCUS_MINUTES = 1;
const DEFAULT_REST_MINUTES = 1;
const DEFAULT_DURATION = DEFAULT_FOCUS_MINUTES * 60; // segundos
const TICK_MS = 1000;

interface TimerState {
  timeRemaining: number;
  isActive: boolean;
  duration: number;
  /** Duração do foco em minutos (usada em "Configurações de foco" e no cronômetro). */
  focusDurationMinutes: number;
  setFocusDurationMinutes: (minutes: number) => void;
  /** Duração do descanso em minutos (usada em "Configurações de foco"). */
  restDurationMinutes: number;
  setRestDurationMinutes: (minutes: number) => void;
  /** Total seconds consumed in focus mode (all sessions). */
  totalTimeSpentSeconds: number;
  /** Sinais sonoros suaves no alerta do timer (10% restante). */
  enableSoftSounds: boolean;
  setEnableSoftSounds: (v: boolean) => void;
  start: () => void;
  pause: () => void;
  resume: () => void;
  setOnComplete: (callback: (() => void) | null) => void;
}

export const useTimerStore = create<TimerState>((set, get) => {
  let intervalId: ReturnType<typeof setInterval> | null = null;
  let onCompleteCallback: (() => void) | null = null;

  const clearTimer = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  const runTick = () => {
    const { timeRemaining, duration } = get();
    if (timeRemaining <= 0) {
      clearTimer();
      const { totalTimeSpentSeconds } = get();
      set({
        isActive: false,
        timeRemaining: 0,
        totalTimeSpentSeconds: totalTimeSpentSeconds + duration,
      });
      onCompleteCallback?.();
      onCompleteCallback = null;
      return;
    }
    set({ timeRemaining: timeRemaining - 1 });
  };

  return {
    timeRemaining: DEFAULT_DURATION,
    isActive: false,
    duration: DEFAULT_DURATION,
    focusDurationMinutes: DEFAULT_FOCUS_MINUTES,
    setFocusDurationMinutes: (minutes) => {
      const clamped = Math.max(1, Math.min(999, Math.round(minutes)));
      set({
        focusDurationMinutes: clamped,
        duration: clamped * 60,
        ...(get().isActive ? {} : { timeRemaining: clamped * 60 }),
      });
    },
    restDurationMinutes: DEFAULT_REST_MINUTES,
    setRestDurationMinutes: (minutes) => {
      const clamped = Math.max(1, Math.min(999, Math.round(minutes)));
      set({ restDurationMinutes: clamped });
    },
    totalTimeSpentSeconds: 0,
    enableSoftSounds: true,
    setEnableSoftSounds: (v) => set({ enableSoftSounds: v }),

    start: () => {
      clearTimer();
      set({ isActive: true, timeRemaining: get().duration });
      intervalId = setInterval(runTick, TICK_MS);
    },

    pause: () => {
      clearTimer();
      const { duration, timeRemaining, totalTimeSpentSeconds } = get();
      const elapsed = duration - timeRemaining;
      set({
        isActive: false,
        totalTimeSpentSeconds: totalTimeSpentSeconds + elapsed,
      });
    },

    resume: () => {
      clearTimer();
      set({ isActive: true });
      intervalId = setInterval(runTick, TICK_MS);
    },

    setOnComplete: (callback) => {
      onCompleteCallback = callback;
    },
  };
});
