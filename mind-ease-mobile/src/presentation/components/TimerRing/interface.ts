export interface ITimerRingProps {
  timeRemaining: number;
  totalTime: number;
  status?: string;
  ringColor?: string;
  progressColor?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  timeClassName?: string;
  statusClassName?: string;
}
