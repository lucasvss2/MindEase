import { ReactNode } from 'react'

import * as S from './styles'
import { Footer, Header, useDocumentTitle } from '@/presentation'
import { FloatButton } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'


interface PageLayoutProps {
  title?: string
  children: ReactNode
  sidebar?: ReactNode
  noPadding?: boolean
  hideFloatButton?: boolean
}

const PageLayout = ({ title, sidebar, children, noPadding = false, hideFloatButton = false }: PageLayoutProps) => {
  const navigate = useNavigate()
  useDocumentTitle(title)

  return (
    <S.Container>
      <Header />
      {!hideFloatButton && <S.FloatButtonContainer trigger="hover" icon={<UserOutlined />}>
        <FloatButton
          content="Login"
          shape="square"
          style={{ insetInlineEnd: 24 }}
          onClick={() => navigate('/login')}
        />
        <FloatButton
          content="Registrar"
          shape="square"
          style={{ insetInlineEnd: 24 }}
          onClick={() => navigate('/register')}
        />
      </S.FloatButtonContainer>}
      <S.SidebarContainer>
        {sidebar}
        <S.Content className={noPadding ? 'no-padding' : ''}>{children}</S.Content>
      </S.SidebarContainer>
      <Footer />
    </S.Container>
  )
}

export { PageLayout }
