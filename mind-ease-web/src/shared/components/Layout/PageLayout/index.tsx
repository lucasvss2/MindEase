import { ReactNode } from 'react'


import * as S from './styles'

import { Header, useDocumentTitle } from '@/shared'

interface PageLayoutProps {
  title?: string
  children: ReactNode
  sidebar?: ReactNode
}

const PageLayout = ({ title, sidebar, children }: PageLayoutProps) => {
  useDocumentTitle(title)

  return (
    <S.Container>
      <Header />

      <S.SidebarContainer>
        {sidebar}
        <S.Content>{children}</S.Content>
      </S.SidebarContainer>

    </S.Container>
  )
}

export { PageLayout }
