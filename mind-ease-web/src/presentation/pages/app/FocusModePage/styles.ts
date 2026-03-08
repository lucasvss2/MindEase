import { styled } from "@linaria/react";

export const FocusModePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 24px;
`;

export const TaskTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 16px;
  color: var(--text);
  margin-top: 8px;
  margin-bottom: 24px;
  opacity: 0.8;
  text-align: center;
`;