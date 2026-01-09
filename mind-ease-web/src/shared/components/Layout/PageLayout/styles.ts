import { Layout } from 'antd'
import { styled } from '@/shared/styles'

export const SidebarContainer = styled(Layout, {
  base: {
    height: '100%',
    flexDirection: 'row',

    '& .ant-layout-sider': {
      backgroundColor: '#fff',
    },

    '& .ant-layout-content': {
      width: '0',
    },
  }
})

export const ContentContainer = styled(Layout, {
  base: {
    padding: '16px 24px 24px',

    '& .ant-layout-content': {
      width: '100%',
    },
  }
})

export const Container = styled(Layout, {
  base: {
    // && increased specificity in v3, we can likely skip it or use &
    minHeight: '100vh !important',
    height: '100% !important',
    overflowX: 'hidden',
  }
})

export const CenterLoadingContainer = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '85vh',
    width: '100%',
  }
})

export const Content = styled(Layout.Content, {
  base: {
     padding: '16px 24px 24px',
     display: 'flex',
     flexDirection: 'column',
     gap: '16px',
     margin: '16px 0',
  }
})
