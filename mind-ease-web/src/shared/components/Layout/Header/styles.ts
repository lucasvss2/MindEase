import { CheckCircleOutlined } from '@ant-design/icons'
import { Button, Layout, Drawer as AntdDrawer, Typography, Drawer } from 'antd'
import { styled } from '@/shared/styles'

// Since we are migrating manually, we'll recreate the styled components using Panda's styled factory.
// Some antd components (Layout.Header, Drawer) might need wrapping or className injection if styled directly,
// but Panda's styled factory can wrap React components.

export const Container = styled(Layout.Header, {
  base: {
    height: '50px !important',
    padding: '0 16px !important',
    backgroundColor: 'white !important', // Assuming #fff from prev file matches 'white' token or literal
    borderBottom: '3px solid',
    borderColor: 'brand',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      cursor: 'pointer',
    },
  },
})

export const LogoContainer = styled('div', {
  base: {
    padding: '0 8px',
    display: 'flex',
    cursor: 'pointer',
    '& .ant-typography': {
      lineHeight: '1.1',
    },
  },
})

export const AreaSwapperContainer = styled('div', {
  base: {
    display: 'flex',
    width: '280px',
  },
})

export const LogoTextContainer = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '5px',
  },
})

export const LogoText = styled(Typography.Text, {
  base: {
    fontSize: '20px !important',
    fontWeight: '700 !important',
    color: 'brand !important',
  },
})

export const HeaderActionsContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
})

export const MenuButton = styled(Button, {
  base: {
    display: 'flex !important',
    alignItems: 'center !important',
    gap: '4px !important',
    padding: '4px 8px !important',
    fontSize: '14px !important',
    color: 'white !important',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
    '&:hover, &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover': {
      color: '#fff !important',
    },
  },
})

export const MenuDrawer = styled(AntdDrawer, {
  base: {
    '& .ant-drawer-title': {
      color: 'text',
      '&:not(:disabled):hover': {
        color: 'text',
      },
    },
    '& .ant-drawer-extra': {
      color: 'darkGreen',
      '&:not(:disabled):hover': {
        color: 'token(colors.brand/80)',
      },
    },
    '& .ant-drawer-body': {
      padding: '0',
    },
    '& .ant-drawer-footer': {
      display: 'flex',
      justifyContent: 'end',
      '& .ant-btn-default': {
        '&:not(:disabled):hover': {
          color: 'brand',
        },
      },
    },
  },
})

export const LogOutButton = styled(Button, {
  base: {
    color: 'darkGreen !important',
    border: '1px solid !important',
    borderColor: 'darkGreen !important',
  },
})

export const MenuContent = styled('div', {
  base: {
    '& .ant-menu-light.ant-menu-root.ant-menu-inline': {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
    },
    '& .ant-menu-item': {
      fontSize: '16px',
      color: 'brand',
      '&:hover': {
        color: 'white !important',
        background: 'brand !important',
      },
      '&.ant-menu-item.ant-menu-item-selected': {
        color: 'white',
        background: 'brand',
        fontWeight: '700',
      },
      '& span.ant-menu-title-content': {
        transition: '0s',
      },
    },
  },
})

export const MenuContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
})

export const UserButton = styled(Button, {
  base: {
    padding: '0 !important',
    background: 'none !important',
    borderColor: '#434343 !important',
    '&:disabled': {
      cursor: 'default',
    },
  },
})

export const NotificationButton = styled(Button, {
  base: {
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'center !important',
    width: '33px !important',
    height: '33px !important',
    borderRadius: '50% !important',
    color: 'white !important',
    fontSize: '14px !important',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
  },
})

export const NotificationContainer = styled('div', {
  base: {
    display: 'flex',
    position: 'relative',
  },
})

export const NotificationBadge = styled('span', {
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: '20px',
    right: '-3px',
    height: '16px',
    borderRadius: '6px',
    paddingLeft: '2px',
    paddingRight: '2px',
    backgroundColor: '#ffc600',
    border: '1px solid #ffffff',
    cursor: 'pointer',
    fontSize: '10px',
    fontWeight: '400',
    color: '#000000',
  },
})

export const UserArea = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontSize: '12px',
    border: 'none',
    color: 'white',
  },
})

export const HeaderButton = styled(Button, {
  base: {
    display: 'flex !important',
    alignItems: 'center !important',
    gap: '4px !important',
    padding: '4px 8px !important',
    fontSize: '14px !important',
    color: 'white !important',
    textTransform: 'uppercase',
    transition: 'all 0.2s ease',
    '&:hover, &.ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover': {
      color: 'brand !important',
    },
    '& .ant-badge': {
      transition: 'all 0.2s ease',
      color: 'white',
      '&:hover, .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover': {
        color: 'brand',
      },
    },
  },
})

export const ToastContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
})

export const BoldSpan = styled('span', {
  base: {
    fontWeight: 'bold',
  },
})

export const CircleOutlined = styled(CheckCircleOutlined, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    width: '14px',
    height: '14px',
    borderRadius: '99%',
    backgroundColor: '#80c343',
  },
})

export const NotificationDrawer = styled(Drawer, {
  base: {
    '& .ant-drawer-close': {
      position: 'absolute',
      top: '25px',
      right: '10px',
      color: 'brand',
    },
    '& .ant-drawer-title': {
      fontSize: '20px',
      fontWeight: '700',
      color: 'text',
    },
  },
})

export const FooterSidebar = styled('div', {
  base: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
})

export const CleanButton = styled(Button, {
  base: {
    color: 'darkGreen !important',
    border: '1px solid !important',
    borderColor: 'darkGreen !important',
  },
})

export const GreenButton = styled(Button, {
  base: {
    backgroundColor: 'brand !important',
    boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04) !important',
    border: '1px solid !important',
    borderColor: 'brand !important',
    borderRadius: '4px !important',
    color: '#fff !important',
    width: '100% !important',
    height: '35px !important',
    '&:disabled': {
      backgroundColor: '#f5f5f5 !important', // Fallback for list item bg
      color: '#d9d9d9 !important', // Fallback for light gray
      border: '1px solid !important',
      borderColor: '#d9d9d9 !important',
      boxShadow: '0px 2px 0px 0px rgba(0, 0, 0, 0.04)',
    },
  },
})
