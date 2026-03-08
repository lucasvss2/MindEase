import { styled } from "@linaria/react";
import { Card } from "antd";

interface ResponsiveCardProps {
  $height?: string
  $width?: string
  $gap?: string
}

export const ResponsiveCard = styled(Card) <ResponsiveCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.$width || "100%"};
  height: ${props => props.$height || "auto"};
  background-color: var(--color-cardBG);
  border: var(--color-cardBorder);
  box-shadow: var(--box-shadow-sm);
  && .ant-card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${props => props.$gap || "0px"};
    overflow-y: auto;
    overflow-x: hidden;
    
    &::before, &::after {
      display: none;
    }
  } 
`
