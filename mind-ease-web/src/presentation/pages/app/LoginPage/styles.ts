import { styled } from "@linaria/react";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: var(--color-transparent);
`

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Subtitle = styled.span`
  font-size: 16px;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`