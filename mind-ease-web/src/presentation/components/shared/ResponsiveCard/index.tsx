import { CardProps } from "antd"
import * as S from "./styles"

interface ResponsiveCardProps extends Omit<CardProps, 'type'> {
  children: React.ReactNode
  $height?: string
  $width?: string
  $gap?: string
}

export function ResponsiveCard({ children, $height, $width, $gap, ...rest }: ResponsiveCardProps) {
  return (
    <S.ResponsiveCard $height={$height} $width={$width} $gap={$gap} {...rest}>
      {children}
    </S.ResponsiveCard>
  )
}
