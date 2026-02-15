import { ReactNode } from 'react'

import * as S from './styles'
import { Footer, Header, useDocumentTitle } from '@/presentation'
import { FloatButton } from 'antd'
import { UserOutlined } from '@ant-design/icons'


interface PageLayoutProps {
  title?: string
  children: ReactNode
  sidebar?: ReactNode
  noPadding?: boolean
}

const PageLayout = ({ title, sidebar, children, noPadding = false }: PageLayoutProps) => {
  useDocumentTitle(title)

  return (
    <S.Container>
      <Header />
      <S.FloatButtonContainer trigger="hover" icon={<UserOutlined />}>
        <FloatButton
          content="Login"
          shape="square"
          style={{ insetInlineEnd: 24 }}
        />
        <FloatButton
          content="Register"
          shape="square"
          style={{ insetInlineEnd: 24 }}
        />
      </S.FloatButtonContainer>
      <S.SidebarContainer>
        {sidebar}
        <S.Content className={noPadding ? 'no-padding' : ''}>{children}</S.Content>
      </S.SidebarContainer>
      <Footer />
    </S.Container>
  )
}

export { PageLayout }
