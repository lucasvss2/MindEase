import { cva } from '@/shared/styles'

export const Container = cva({
  base: {
    minHeight: '100vh !important',
    height: '100% !important',
  },
})

export const SidebarContainer = cva({
  base: {
    height: '100%',
    flexDirection: 'row',

    '&.ant-layout-sider': {
      backgroundColor: 'secondaryBackground !important',
    },

    '&.ant-layout-content': {
      width: 0,
    },
  },
})

export const ContentContainer = cva({
  base: {
    padding: '24px 24px 24px',
    '&.ant-layout-content': {
      width: '100% !important',
    },

    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  variants: {
    active: {
      true: {
        backgroundImage: 'url(/motherboard-background.svg) !important',
      },
      false: {
        backgroundImage: 'none',
      },
    },
  },
  defaultVariants: {
    active: false,
  },
})

export const Content = cva({
  base: {
    display: 'flex',
    minHeight: '100vh',
    height: '100%',
    flexDirection: 'column',
    gap: '24px',
  },
})
