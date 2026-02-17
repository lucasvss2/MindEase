import * as S from './styles'
import logo from '@/assets/images/mind-ease-icon.png'

export function Footer() {
  return (
    <S.Footer>
      <img src={logo} alt="MindEase-logo" width={30} height={30} /><p>MindEase</p>
    </S.Footer>
  )
}