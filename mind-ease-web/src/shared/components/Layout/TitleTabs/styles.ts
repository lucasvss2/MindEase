import { Tabs } from 'antd'
import { styled } from '@/shared/styles'

export const StyledTabs = styled(Tabs, {
  base: {
    width: '100%',

    '& .ant-tabs-nav': {
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      margin: '0',
    },

    '& .ant-tabs-nav .ant-tabs-nav-wrap': {
      flex: '0 0 auto',
      margin: '0 1px 0 1px',
    },

    '& .ant-tabs-tab': {
      fontSize: '20px', // or token('fontSizes.xl') if available, keeping literal for fidelity
      lineHeight: '24px',
      fontWeight: '400',
      fontFamily: 'AcerFoco, sans-serif', // Assuming this is the theme font
      color: 'brand',
    },

    '& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn': {
      color: 'brand',
    },

    '& .ant-tabs-ink-bar': {
      height: '1px !important',
      background: 'brand !important',
    },

    '& .ant-tabs-nav::before': {
      borderBottom: 'transparent !important',
    },

    '& .ant-tabs-extra-content': {
      display: 'flex',
      flex: '1',
      justifyContent: 'flex-end',
      minHeight: '40px',
    },
  }
})
