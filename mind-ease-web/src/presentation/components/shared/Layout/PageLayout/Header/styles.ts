import { CheckCircleOutlined } from '@ant-design/icons'
import { Button, Layout, Drawer as AntdDrawer, Typography, Drawer } from 'antd'
import { rgba } from 'polished'
import { styled } from '@linaria/react'
import { styledTheme } from '@/main/config/styles'

export const Container = styled(Layout.Header)`
  height: 50px;
  padding: 0 16px;
  background-color: ${styledTheme.customTokens.header.bgColor};
  border-bottom: 3px solid ${styledTheme.colors.brand};

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    cursor: pointer;
  }
`

export const LogoContainer = styled.div`
  padding: 0 8px;
  display: flex;
  cursor: pointer;
  .ant-typography {
    line-height: 1.1;
  }
`
export const AreaSwapperContainer = styled.div`
  display: flex;
  width: 280px;
`

export const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  gap: 8px
`

export const LogoText = styled(Typography.Text)`
  font-size: 20px;
  font-weight: 700;
  color: ${styledTheme.colors.brand};
`

export const HeaderActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const MenuButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 4px 8px;

  font-size: 14px;
  color: ${styledTheme.colors.neutral0};
  text-transform: uppercase;

  transition: all 0.2s ease;

  &:hover,
  .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
    color: #fff !important;
  }
`

export const MenuDrawer = styled(AntdDrawer)`
  .ant-drawer-title {
    color: ${styledTheme.colors.text};

    :not(:disabled):hover {
      color: ${styledTheme.colors.text};
    }
  }

  .ant-drawer-extra {
    color: ${styledTheme.colors.darkGreen};

    :not(:disabled):hover {
      color: ${rgba(`${styledTheme.colors.brand}`, 0.8)};
    }
  }
  .ant-drawer-body {
    padding: 0;
  }

  .ant-drawer-footer {
    display: flex;
    justify-content: end;

    .ant-btn-default {
      :not(:disabled):hover {
        color: ${styledTheme.colors.brand};
      }
    }
  }
`

export const LogOutButton = styled(Button)`
  color: ${styledTheme.colors.darkGreen};
  border: 1px solid ${styledTheme.colors.darkGreen};
`

export const MenuContent = styled.div`
  .ant-menu-light.ant-menu-root.ant-menu-inline {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .ant-menu-item {
    font-size: 16px;
    color: ${styledTheme.colors.brand};

    &:hover {
      color: ${styledTheme.colors.neutral0} !important;
      background: ${styledTheme.colors.brand} !important;
    }

    &.ant-menu-item.ant-menu-item-selected {
      color: ${styledTheme.colors.neutral0};
      background: ${styledTheme.colors.brand};

      font-weight: 700;
    }

    span.ant-menu-title-content {
      transition: 0s;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;
`

export const UserButton = styled(Button)`
  padding: 0;
  background: none;
  border-color: #434343;

  &:disabled {
    cursor: default;
  }
`

export const NotificationButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33px;
  height: 33px;
  border-radius: 50%;
  color: ${styledTheme.colors.neutral0};
  font-size: 14px;
  text-transform: uppercase;
  transition: all 0.2s ease;
`

export const NotificationContainer = styled.div`
  display: flex;
  position: relative;
`

export const NotificationBadge = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 20px;
  right: -3px;
  height: 16px;
  border-radius: 6px;
  padding-left: 2px;
  padding-right: 2px;
  background-color: ${styledTheme.colors.yellow600};
  border: 1px solid ${styledTheme.colors.neutral0};
  cursor: pointer;
  font-size: 10px;
  font-weight: 400;
  color: ${styledTheme.colors.neutral1000};
`

export const UserArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-size: 12px;

  border: none;

  color: ${styledTheme.colors.neutral0};
`

export const HeaderButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 4px 8px;
  font-size: 14px;

  color: ${styledTheme.colors.neutral0};
  text-transform: uppercase;

  transition: all 0.2s ease;

  &:hover,
  .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
    color: ${styledTheme.colors.brand};
  }

  .ant-badge {
    transition: all 0.2s ease;
    color: ${styledTheme.colors.neutral0};

    &:hover,
    .ant-btn-text:not(:disabled):not(.ant-btn-disabled):hover {
      color: ${styledTheme.colors.brand};
    }
  }
`

export const ToastContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`
export const BoldSpan = styled.span`
  font-weight: bold;
`

export const CircleOutlined = styled(CheckCircleOutlined)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  width: 14px;
  height: 14px;
  border-radius: 99%;
  background-color: ${styledTheme.colors.brand};
`

export const NotificationDrawer = styled(Drawer)`
  .ant-drawer-close {
    position: absolute;
    top: 25px;
    right: 10px;
    color: ${styledTheme.colors.brand};
  }

  .ant-drawer-title {
    font-size: 20px;
    font-weight: 700;
    color: ${styledTheme.customTokens.text.darkGray};
  }
`

export const FooterSidebar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const CleanButton = styled(Button)`
  color: ${styledTheme.colors.darkGreen};
  border: 1px solid ${styledTheme.colors.darkGreen};
`

export const GreenButton = styled(Button)`
  background-color: ${styledTheme.colors.brand} !important;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04) !important;
  border: 1px solid ${styledTheme.colors.brand} !important;
  border-radius: 4px !important;
  color: #fff !important;
  width: 100% !important;
  height: 35px !important;
  &:disabled {
    background-color: ${styledTheme.customTokens.listItem.bgColor}!important;
    color: ${styledTheme.customTokens.divider.lightGray}!important;
    border: 1px solid ${styledTheme.customTokens.divider.lightGray}!important;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.04);
  }
`
