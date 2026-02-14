import * as S from './styles'

type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link'

interface ResponsiveButtonProps {
  children: React.ReactNode
  width?: string
  height?: string
  icon?: React.ReactNode
  type?: ButtonType
}

const themePrefix: Record<ButtonType, string> = {
  default: 'Default',
  primary: 'Outlined',
  dashed: 'Dashed',
  text: 'Neutral',
  link: 'Link',
}

function getButtonStyleVars(type: ButtonType = 'default', width?: string, height?: string) {
  const prefix = themePrefix[type]

  return {
    '--btn-bg': `var(--color-button${prefix}BG)`,
    '--btn-text': `var(--color-button${prefix}Text)`,
    '--btn-border': `var(--color-button${prefix}Border)`,
    '--btn-hover-bg': `var(--color-button${prefix}HoverBG)`,
    '--btn-hover-text': `var(--color-button${prefix}HoverText)`,
    '--btn-hover-border': `var(--color-button${prefix}HoverBorder)`,
    '--btn-active-bg': `var(--color-button${prefix}ActiveBG)`,
    '--btn-active-text': `var(--color-button${prefix}ActiveText)`,
    '--btn-active-border': `var(--color-button${prefix}ActiveBorder)`,
    ...(width && { '--btn-width': width }),
    ...(height && { '--btn-height': height }),
  } as React.CSSProperties
}

export function ResponsiveButton({ children, width, height, icon, type }: ResponsiveButtonProps) {
  return (
    <S.ResponsiveButton
      icon={icon}
      type={type}
      style={getButtonStyleVars(type, width, height)}
    >
      {children}
    </S.ResponsiveButton>
  )
}
