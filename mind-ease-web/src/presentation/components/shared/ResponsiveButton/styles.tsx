import { Button, type ButtonProps } from 'antd'
import { styled } from '@linaria/react'
import { rem } from 'polished'

type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link' | 'neutral' | 'disabled'

interface ResponsiveButtonProps {
  $width?: string
  $height?: string
  $type?: ButtonType
}

const prefixMap: Record<ButtonType, string> = {
  default: 'Default',
  primary: 'Outlined',
  dashed: 'Dashed',
  text: 'Link',
  link: 'Link',
  neutral: 'Neutral',
  disabled: 'Neutral',
}

const getPrefix = (type?: ButtonType) => prefixMap[type ?? 'default']

// State: default
const getBG = (type?: ButtonType) => `var(--color-button${getPrefix(type)}BG)`
const getText = (type?: ButtonType) => `var(--color-button${getPrefix(type)}Text)`
const getBorder = (type?: ButtonType) => `var(--color-button${getPrefix(type)}Border)`

// State: hover
const getHoverBG = (type?: ButtonType) => `var(--color-button${getPrefix(type)}HoverBG)`
const getHoverText = (type?: ButtonType) => `var(--color-button${getPrefix(type)}HoverText)`
const getHoverBorder = (type?: ButtonType) => `var(--color-button${getPrefix(type)}HoverBorder)`

// State: active
const getActiveBG = (type?: ButtonType) => `var(--color-button${getPrefix(type)}ActiveBG)`
const getActiveText = (type?: ButtonType) => `var(--color-button${getPrefix(type)}ActiveText)`
const getActiveBorder = (type?: ButtonType) => `var(--color-button${getPrefix(type)}ActiveBorder)`

type FilteredButtonProps = ButtonProps & {
  $width?: string
  $height?: string
  $type?: ButtonType
}

const FilteredButton = ({ $width, $height, $type, ...props }: FilteredButtonProps) => (
  <Button {...props} />
)

export const ResponsiveButton = styled(FilteredButton) <ResponsiveButtonProps>`
  width: ${({ $width }) => $width || rem(215)};
  height: ${({ $height }) => $height || rem(56)};

  background-color: ${({ $type }) => getBG($type)} !important;
  color: ${({ $type }) => getText($type)} !important;
  border: ${({ $type }) => getBorder($type)} !important;
  box-shadow: ${({ $type }) => ($type === 'link' || $type === 'text') ? 'none' : 'var(--box-shadow-sm)'} !important;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $type }) => getHoverBG($type)} !important;
    color: ${({ $type }) => getHoverText($type)} !important;
    border: ${({ $type }) => getHoverBorder($type)} !important;
    box-shadow: var(--box-shadow-sm) !important;
  }

  &:active {
    background-color: ${({ $type }) => getActiveBG($type)} !important;
    color: ${({ $type }) => getActiveText($type)} !important;
    border: ${({ $type }) => getActiveBorder($type)} !important;
    box-shadow: var(--box-shadow-sm) !important;
  }
  
`