import { create } from "zustand";

const DEFAULT_DURATION = 2 * 60; // 2 min em segundos
const TICK_MS = 1000;

interface TimerState {
  timeRemaining: number;
  isActive: boolean;
  duration: number;
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
    const { timeRemaining } = get();
    if (timeRemaining <= 0) {
      clearTimer();
      set({ isActive: false, timeRemaining: 0 });
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

    start: () => {
      clearTimer();
      set({ isActive: true, timeRemaining: get().duration });
      intervalId = setInterval(runTick, TICK_MS);
    },

    pause: () => {
      clearTimer();
      set({ isActive: false });
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
