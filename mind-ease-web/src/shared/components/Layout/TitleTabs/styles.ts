import { cva } from '@/shared/styles'

export const StyledTabs = cva({
  base: {
    width: '100% !important',

    '& .ant-tabs-nav': {
      alignItems: 'flex-end !important',
      justifyContent: 'space-between !important',
      margin: 0,
    },

    '& .ant-tabs-nav .ant-tabs-nav-wrap': {
      flex: '0 0 auto !important',
      margin: '0 1px 0 1px !important',
    },

    '& .ant-tabs-tab': {
      fontSize: '20px !important',
      lineHeight: '24px !important',
      fontWeight: 400,
      fontFamily: 'AcerFoco !important',
      color: 'text !important',
    },

    '& .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn': {
      color: 'brand !important',
    },

    '& .ant-tabs-ink-bar': {
      height: '1px !important',
      background: 'brand !important',
    },

    '& .ant-tabs-nav::before': {
      borderBottom: 'transparent !important',
    },

    '& .ant-tabs-extra-content': {
      display: 'flex !important',
      flex: 1,
      justifyContent: 'flex-end !important',
      minHeight: '40px !important',
    },
  },
})
