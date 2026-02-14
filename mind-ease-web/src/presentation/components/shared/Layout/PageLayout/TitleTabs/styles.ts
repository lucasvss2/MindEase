import { Tabs } from 'antd'
import { rem } from 'polished'
import { styled } from '@linaria/react'

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
    font-weight: 400;
    color: var(--color-text);
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #434343;
  }

  .ant-tabs-ink-bar {
    height: 1px !important;
    background: #434343 !important;
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
