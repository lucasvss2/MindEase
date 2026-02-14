import * as S from './styles'

interface ResponsiveButtonProps {
  children: React.ReactNode
  width?: string
  height?: string
  icon?: React.ReactNode
  type?: 'default' | 'primary' | 'dashed' | 'text' | 'link' | 'neutral'
  disabled?: boolean
  onClick?: () => void
}

export function ResponsiveButton({ children, width, height, icon, type, disabled = false, onClick }: ResponsiveButtonProps) {
  return (
    <S.ResponsiveButton
      $width={width}
      $height={height}
      $type={disabled ? 'disabled' : type}
      icon={icon}
      type={type === 'neutral' ? 'default' : type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </S.ResponsiveButton>
  )
}
