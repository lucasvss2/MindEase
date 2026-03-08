import { Switch } from 'antd'
import * as S from './styles'
import { SwitchProps } from 'antd'

interface ResponsiveSwitchProps extends SwitchProps {
}

export function ResponsiveSwitch({ ...props }: ResponsiveSwitchProps) {
  return (
    <S.SwitchContainer>
      <Switch {...props} />
    </S.SwitchContainer>
  )
}