import { cva, css } from '@/shared/styles'

export const Container = cva({
  base: {
    height: '50px !important',
    padding: '0 16px!important',
    backgroundColor: 'darkGray !important',
    display: 'flex !important',
    alignItems: 'center !important',
    justifyContent: 'space-between !important',
    borderBottom: 'solid',
    borderBottomColor: 'brandPrimary !important',
    borderBottomWidth: '3px !important',
    '& a': {
      cursor: 'pointer !important',
    },
    '&.ant-select': {
      height: '33px',
    },
    '&.ant-layout-header': {
      backgroundColor: 'darkGray !important',
    }
  },
  variants: {
    theme: {
      light: {
        '&.ant-layout-header': {
          backgroundColor: 'darkGray !important',
        },
        '& .ant-switch': {
          border: 'solid !important',
          borderWidth: '1px !important',
          borderColor: 'brandPrimary !important',

          '& .ant-switch-handle': {
            border: 'solid !important',
            borderWidth: '1px !important',
            borderColor: 'brandPrimary !important',
            borderRadius: '50% !important',
            top: '1px !important',

            '&::before': {
              backgroundColor: 'darkGray !important',
            },
          },

          '& .ant-switch-inner': {
            backgroundColor: 'darkGray !important',

            '&:hover': {
              backgroundColor: 'darkGray !important',
            },

            '& .anticon': {
              color: 'brandPrimary !important',
            },
          },
        },
      },
      dark: {
        '&.ant-layout-header': {
          backgroundColor: 'darkGray !important',
        },
        '& .ant-switch': {
          border: 'solid !important',
          borderWidth: '1px !important',
          borderColor: 'brandPrimary !important',

          '& .ant-switch-handle': {
            border: 'solid !important',
            borderWidth: '1px !important',
            borderColor: 'darkGray !important',
            borderRadius: '50% !important',
            top: '1px !important',

            '&::before': {
              backgroundColor: 'darkGray !important',
            },
          },

          '& .ant-switch-inner': {
            backgroundColor: 'brandPrimary !important',

            '&:hover': {
              backgroundColor: 'brandPrimary !important',
            },

            '& .anticon': {
              color: 'darkGray !important',
            },
          },
        },
      },
    },
  },
})

export const HeaderContainer = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  gap: '8px',
})

export const LogoContainer = css({
  padding: '0 8px',
  display: 'flex',
  cursor: 'pointer',
  '&.ant-typography': {
    lineHeight: 1.1,
  },
})

export const LogoTextContainer = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '5px',
})

export const LogoText = cva({
  base: {
    fontSize: '20px !important',
    fontWeight: 700,
    color: 'textHeader !important',
  },
})

export const HeaderActionsContainer = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const MenuContainer = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    '& .ant-select-selector': {
      backgroundColor: 'secondaryBackground !important',
      color: 'textHeader !important',
    },
  },
})

export const MenuButton = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',

    padding: '4px 8px',

    fontSize: '14px',
    color: 'white !important',
    textTransform: 'uppercase',

    transition: 'all 0.2s ease',

    '&:hover': {
      color: 'brandPrimary !important',
    },
    '& .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover': {
      color: 'brandPrimary !important',
    },
  },
})`
`

export const MenuDrawer = cva({
  base: {
    backgroundColor: 'secondaryBackground !important',
    '&.ant-menu': {
      backgroundColor: 'secondaryBackground !important',
    },
    '&.ant-drawer-title': {
      backgroundColor: 'secondaryBackground !important',
      color: 'textHeader  !important',

      '&:not(:disabled):hover': {
        backgroundColor: 'secondaryBackground !important',
        color: 'textHeader !important',
      },
    },
    '& .ant-drawer-header': {
      borderBottom: 'solid',
      borderBottomColor: 'separator !important',
      borderBottomWidth: '1px !important',
    },

    '& .ant-drawer-extra': {
      backgroundColor: 'secondaryBackground !important',
      color: 'brand',

      '&:not(:disabled):hover': {
        backgroundColor: 'secondaryBackground !important',
        color: 'brand',
      },
    },

    '& .ant-drawer-body': {
      backgroundColor: 'secondaryBackground !important',
      padding: 0,
    },

    '& .ant-drawer-footer': {
      display: 'flex',
      justifyContent: 'end',
      backgroundColor: 'secondaryBackground !important',
      borderTop: `1px solid separator !important`,

      '& .ant-btn-default': {
        backgroundColor: 'secondaryBackground !important',
        '&:not(:disabled):hover': {
          backgroundColor: 'secondaryBackground !important',
          color: 'brandPrimary !important',
        },
      },
    },
  },
})

export const MenuContent = cva({
  base: {
    '& .ant-menu-light.ant-menu-root.ant-menu-inline': {
      display: 'flex !important',
      flexDirection: 'column !important',
      gap: '10px',
      backgroundColor: 'secondaryBackground !important',
      borderInlineEnd: 'none !important',
    },

    '& .ant-menu-item': {
      fontSize: '16px',
      color: 'brandPrimary !important',

      '&:hover': {
        color: 'white !important',
        background: 'brandPrimary !important',
      },

      '&.ant-menu-item-selected': {
        color: 'white !important',
        background: 'brandPrimary !important',
        fontWeight: 700,
      },

      '& span.ant-menu-title-content': {
        transition: '0s',
      },
    },
  },
})

export const headerStyles = {
  height: '50px',
  padding: '0 16px',
  backgroundColor: `var(--colors-dark-gray)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `3px solid var(--colors-brand-primary)`,
}

// Direct CSS variable usage for Drawer
export const drawerStyles = {
  backgroundColor: `var(--colors-secondary-background)`,
}

export const drawerBodyStyles = {
  backgroundColor: `var(--colors-secondary-background)`,
  padding: 0,
}

// Direct CSS variable usage for Logo Text
export const logoTextStyles = {
  fontSize: '20px',
  fontWeight: 700,
  color: `var(--colors-text-header)`,
}
