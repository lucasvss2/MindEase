import { styled } from '@linaria/react'

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 24px 0 8px;
  width: 100%;

  @media (max-width: 1280px), (max-height: 720px) {
    gap: 20px;
    padding: 16px 0 4px;
  }
`

interface PhaseLabelProps {
  $phase: 'work' | 'break'
}

export const PhaseLabel = styled.span<PhaseLabelProps>`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${({ $phase }) => ($phase === 'work' ? '#2d3250' : '#3a9b93')};
  background: ${({ $phase }) =>
    $phase === 'work' ? 'rgba(45,50,80,0.08)' : 'rgba(128,222,217,0.2)'};
  padding: 4px 16px;
  border-radius: 99px;
  transition:
    color 0.4s ease,
    background 0.4s ease;
`

export const CircleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;

  @media (max-width: 1280px), (max-height: 720px) {
    width: 180px;
    height: 180px;
  }
`

export const TimerSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`

export const TimeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1;
`

export const Time = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #2d3250;
  letter-spacing: 2px;
  line-height: 1;

  @media (max-width: 1280px), (max-height: 720px) {
    font-size: 36px;
  }
`

export const StatusLabel = styled.span`
  font-size: 14px;
  color: #9e9e9e;
  font-weight: 400;
`

export const Dot = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #80ded9;
  z-index: 2;
  transition:
    opacity 0.3s ease,
    background-color 0.5s ease;

  @media (max-width: 1280px), (max-height: 720px) {
    width: 10px;
    height: 10px;
    top: 5px;
  }
`

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  justify-content: center;

  @media (max-width: 1280px), (max-height: 720px) {
    gap: 16px;
  }
`

interface StartButtonProps {
  $color: string
}

export const StartButton = styled.button<StartButtonProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ $color }) => $color};
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  min-width: 160px;
  justify-content: center;
  transition:
    background-color 0.5s ease,
    filter 0.2s ease,
    transform 0.1s ease;

  @media (max-width: 1280px), (max-height: 720px) {
    padding: 12px 24px;
    font-size: 14px;
    min-width: 140px;
    border-radius: 12px;
  }

  &:hover:not(:disabled) {
    filter: brightness(0.88);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`

export const ResetButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: transparent;
  color: #2d3250;
  border: none;
  padding: 16px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 16px;
  transition: background-color 0.2s ease;

  @media (max-width: 1280px), (max-height: 720px) {
    padding: 12px 16px;
    font-size: 14px;
    border-radius: 12px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
