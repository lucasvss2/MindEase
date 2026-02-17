import { ButtonProps } from 'antd'
import * as S from './styles'

interface ResponsiveButtonProps extends Omit<ButtonProps, 'type'> {
  width?: string
  height?: string
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link' | 'neutral'
}

export function ResponsiveButton({ children, width, height, icon, type, disabled = false, onClick, ...rest }: ResponsiveButtonProps) {
  return (
    <S.ResponsiveButton
      $width={width}
      $height={height}
      $type={disabled ? 'disabled' : type}
      icon={icon}
      type={type === 'neutral' ? 'default' : type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </S.ResponsiveButton>
  )
}
