import { CardProps } from "antd"
import * as S from "./styles"

interface ResponsiveCardProps extends Omit<CardProps, 'type'> {
  children: React.ReactNode
  $height?: string
  $width?: string
}

export function ResponsiveCard({ children, $height, $width }: ResponsiveCardProps) {
  return (
    <S.ResponsiveCard $height={$height} $width={$width}>
      {children}
    </S.ResponsiveCard>
  )
}
