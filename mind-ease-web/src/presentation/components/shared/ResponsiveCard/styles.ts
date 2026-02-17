import { styled } from "@linaria/react";
import { Card } from "antd";

interface ResponsiveCardProps {
  $height?: string
  $width?: string
}

export const ResponsiveCard = styled(Card) <ResponsiveCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.$width || "100%"}
  height: ${props => props.$height || "auto"}
  background-color: var(--color-cardBG);
  border: var(--color-cardBorder);
`
