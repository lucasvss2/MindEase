import { useNavigate } from 'react-router-dom'

import logo from '@/assets/images/mind-ease-icon.png'

import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.LogoContainer onClick={() => { navigate('/') }}>
        <S.LogoTextContainer>
          <img src={logo} alt="MindEase-logo" width={30} height={30} />
          <S.LogoText>MindEase</S.LogoText>
        </S.LogoTextContainer>
      </S.LogoContainer>

    </S.Container>
  )
}
