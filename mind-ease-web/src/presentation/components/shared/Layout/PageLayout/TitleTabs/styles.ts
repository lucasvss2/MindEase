import { Tabs } from 'antd'
import { rem } from 'polished'
import { styled } from '@linaria/react'
import { styledTheme } from '@/main/config/styles'

export const StyledTabs = styled(Tabs)`
  width: 100%;

  .ant-tabs-nav {
    align-items: flex-end;
    justify-content: space-between;
    margin: 0;
  }

  .ant-tabs-nav .ant-tabs-nav-wrap {
    flex: 0 0 auto;
    margin: 0 1px 0 1px;
  }

  .ant-tabs-tab {
    font-size: ${rem(20)};
    line-height: ${rem(24)};
    font-weight: 400;
    font-family: ${styledTheme.base.fontFamily};
    color: ${styledTheme.base.colorPrimary};
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${styledTheme.customTokens.tab.selectedColor};
  }

  .ant-tabs-ink-bar {
    height: 1px !important;
    background: ${styledTheme.customTokens.tab.selectedColor} !important;
  }

  .ant-tabs-nav::before {
    border-bottom: transparent !important;
  }

  .ant-tabs-extra-content {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    min-height: ${rem(40)};
  }
`

