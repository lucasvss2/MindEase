import { InputProps } from 'antd'
import * as S from './styles'

interface ResponsiveInputProps extends Omit<InputProps, 'type'> {
  width?: string
  height?: string
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link' | 'neutral'
}

export function ResponsiveInput({ width, height, type, disabled = false, onClick, ...rest }: ResponsiveInputProps) {
  return (
    <S.ResponsiveInput
      $width={width}
      $height={height}
      type={type === 'neutral' ? 'default' : type}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    />
  )
}
