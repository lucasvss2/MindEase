import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  LandingPageCarrousel,
  ResponsiveButton,
  ResponsiveInput,
  PageLayout
} from '@/presentation'
import * as S from './styles'

export function LandingPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  return (
    <PageLayout noPadding>
      <LandingPageCarrousel />
      <S.PolyDivider role="separator" aria-hidden="true" />
      <S.HeroContainer>
        <S.SolidHeading>Transforme o caos em</S.SolidHeading>
        <div style={{ margin: '8px 0' }}>
          <S.PolyText>CLAREZA</S.PolyText>
        </div>

        <S.SolidHeading>mental.</S.SolidHeading>

        <S.SubHeading>
          Com o MindEase, sua ferramenta de gestão desenhada especificamente para
          reduzir a sobrecarga cognitiva e aumentar seu foco.
        </S.SubHeading>

        <S.ActionGroup>
          <ResponsiveInput
            placeholder="Digite seu e-mail..."
            width="280px"
            height="56px"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          <ResponsiveButton
            width='100%'
            height='56px'
            type='primary'
            disabled={false}
            onClick={() => {
              navigate('/register', { state: { email: email } })
            }}
            style={{ maxWidth: '250px' }}
          >
            Começar Agora
          </ResponsiveButton>
        </S.ActionGroup>
      </S.HeroContainer>
    </PageLayout>
  )
}
