import { Layout } from 'antd'
import { styled } from '@linaria/react'

export const SidebarContainer = styled(Layout)`
  height: 100%;
  flex-direction: row;

  .ant-layout-sider {
    background-color: #fff;
  }

  .ant-layout-content {
    width: 0;
  }
`

export const ContentContainer = styled(Layout)`
  padding: 16px 24px 24px;

  .ant-layout-content {
    width: 100%;
  }
`

export const Container = styled(Layout)`
  && {
    min-height: 100vh !important;
    height: 100% !important;
    overflow-x: hidden;
  }
`
export const CenterLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 85vh;
  width: 100%;
`

export const Content = styled(Layout.Content)`
  && {
    padding: 16px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px 0;
  }
`

