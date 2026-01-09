import { Link, useLocation, useNavigate } from 'react-router-dom'

import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Drawer, Layout, Menu, MenuProps, Typography } from 'antd'

import { useToggle } from '@/shared'

import * as S from './styles'
import { headerStyles, drawerStyles, drawerBodyStyles, logoTextStyles } from './styles'
import { Switch } from 'antd'
import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useThemeStore } from '@/shared'
import { css } from '@/shared/styles'

type Route = {
  path: string
  label: string
  key: string
  allowedRoles?: string[]
}

type MenuItem = Required<MenuProps>['items'][number]

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const ROUTE_CONFIG: Route[] = [
    {
      path: '/home',
      label: 'Home',
      key: 'home'
    },
  ]

  const [isNavigationDrawerOpen, toggleNavigationDrawer] = useToggle(false)
  const navigationMenuItems: MenuItem[] = ROUTE_CONFIG.map(({ path, label }) => {

    return {
      key: path,
      label: <Link to={path}>{label}</Link>,
      path,
    }
  })
  const { toggleTheme } = useThemeStore()

  return (
    <Layout.Header style={headerStyles as React.CSSProperties}>
      <div className={S.LogoContainer} onClick={() => { navigate('/') }}>
        <div className={S.LogoTextContainer}>
          <Typography.Text style={logoTextStyles as React.CSSProperties}>MindEase</Typography.Text>
        </div>
      </div>
      <div className={S.MenuContainer()}>
        <Switch
          defaultChecked={true}
          unCheckedChildren={<MoonOutlined />}
          checkedChildren={<SunOutlined />}
          onChange={toggleTheme}
        />
        <div className={S.HeaderActionsContainer}>
          <Button className={S.MenuButton} type="text" onClick={toggleNavigationDrawer}>
            Menu
            <MenuOutlined className={css({ fontSize: 24, color: 'white !important' })} />
          </Button>
        </div>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleNavigationDrawer}
        open={isNavigationDrawerOpen}
        width={350}
        closable={false}
        className={S.MenuDrawer()}
        style={drawerStyles as React.CSSProperties}
        styles={{
          body: drawerBodyStyles as React.CSSProperties,
        }}
        extra={<CloseOutlined onClick={toggleNavigationDrawer} />}
      >
        <div className={S.MenuContent()}>
          <Menu mode="inline" items={navigationMenuItems} selectedKeys={[location.pathname]} />
        </div>
      </Drawer>
      <style>{`
        .ant-menu-item {
          color: var(--colors-text) !important;
        }
        .ant-menu-item .ant-menu-title-content {
          color: var(--colors-text) !important;
        }
        .ant-menu-item-selected,
        .ant-menu-item-selected .ant-menu-title-content {
          background: var(--colors-brand-primary) !important;
          color: var(--colors-text-reverse) !important;
        }
        .ant-menu-item:hover,
        .ant-menu-item:hover .ant-menu-title-content {
          background: var(--colors-brand-primary) !important;
          color: var(--colors-text-reverse) !important;
        }
      `}</style>
    </Layout.Header>
  )
}
