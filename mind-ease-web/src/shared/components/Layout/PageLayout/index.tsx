import { ReactNode } from 'react'
import { Layout } from 'antd'

import { Header, useDocumentTitle, useThemeStore } from '@/shared'

import * as S from './styles'

interface PageLayoutProps {
  title?: string
  children: ReactNode
  sidebar?: ReactNode
}

const PageLayout = ({ title, sidebar, children }: PageLayoutProps) => {
  useDocumentTitle(title)
  const { theme } = useThemeStore()

  return (
    <Layout className={S.Container()}>
      <Header />

      <Layout className={S.SidebarContainer()}>
        {sidebar}

        <Layout className={S.ContentContainer({ active: theme === 'dark' ? true : false })}>
          <Layout.Content className={S.Content()}>{children}</Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export { PageLayout }
