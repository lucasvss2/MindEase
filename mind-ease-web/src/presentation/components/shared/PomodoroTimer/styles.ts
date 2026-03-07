import { styled } from "@linaria/react";

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 24px 0 8px;
  width: 100%;
`;

export const CircleContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 240px;
`;

export const TimerSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
`;

export const TimeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  z-index: 1;
`;

export const Time = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #2d3250;
  letter-spacing: 2px;
  line-height: 1;
`;

export const StatusLabel = styled.span`
  font-size: 14px;
  color: #9e9e9e;
  font-weight: 400;
`;

export const Dot = styled.div`
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #7ecec4;
  z-index: 2;
  transition: opacity 0.3s ease;
`;

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  justify-content: center;
`;

export const StartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #7ecec4;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  min-width: 160px;
  justify-content: center;
  transition: background-color 0.2s ease, transform 0.1s ease;

  &:hover {
    background-color: #6abdb3;
  }

  &:active {
    transform: scale(0.97);
  }
`;

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

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
