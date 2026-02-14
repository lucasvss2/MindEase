import { ResponsiveButton } from '@/presentation'
import * as S from './styles'

interface CustomizableDiaglogProps {
  title: string
  open: boolean
  onOk: () => void
  onCancel: () => void
  children: React.ReactNode
  $type: 'danger' | 'default'
  cancelButtonText: string
  okButtonText: string
  $width?: string
  $height?: string
  $bodyHeight?: string
}

export function CustomizableDiaglog({
  title,
  open,
  onOk,
  onCancel,
  children,
  $type,
  cancelButtonText,
  okButtonText,
  $width,
  $height,
  $bodyHeight
}: CustomizableDiaglogProps) {
  return (
    <S.CustomizableDiaglog
      title={title}
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      children={children}
      $type={$type}
      $width={$width}
      $height={$height}
      $bodyHeight={$bodyHeight}
      footer={
        <>
          <ResponsiveButton
            width="125px"
            height="45px"
            type={'neutral'}
            onClick={onCancel}
          >{cancelButtonText}</ResponsiveButton>
          <ResponsiveButton
            width="125px"
            height="45px"
            type={$type === 'danger' ? 'dashed' : 'default'}
            onClick={onOk}
          >{okButtonText}</ResponsiveButton>
        </>
      }
    />

  )
}
