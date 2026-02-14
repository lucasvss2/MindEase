import { Button } from 'antd'
import { styled } from '@linaria/react'
import { rem } from 'polished'

type ButtonType = 'default' | 'primary' | 'dashed' | 'text' | 'link'

interface ResponsiveButtonProps {
  $width?: string
  $height?: string
  $type?: ButtonType
}

const getBorderStyle = (type?: ButtonType) => {
  switch (type) {
    case 'primary':
      return 'none'
    case 'dashed':
      return '1px dashed var(--color-brand)'
    case 'text':
    case 'link':
      return 'none'
    default:
      return '1px solid var(--color-colorBorderPrimary)'
  }
}

export const ResponsiveButton = styled(Button) <ResponsiveButtonProps>`
  width: ${({ $width }) => $width || rem(215)};
  height: ${({ $height }) => $height || rem(56)};
  border: ${({ $type }) => getBorderStyle($type)};
`