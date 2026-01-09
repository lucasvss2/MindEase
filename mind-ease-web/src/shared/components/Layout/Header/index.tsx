import { Link, useLocation, useNavigate } from 'react-router-dom'
import {
  CloseOutlined,
  MenuOutlined
} from '@ant-design/icons'
import {
  Menu,
  MenuProps,
} from 'antd'

import * as S from './styles'
import { useToggle } from '@/shared'

type Route = {
  path: string
  label: string
  key: string
  allowedRoles?: string[]
}

const ROUTE_CONFIG: Route[] = [
  {
    path: '/home',
    label: 'Home',
    key: 'home'
  },
  {
    path: '/dashboard',
    label: 'Dashboard',
    key: 'dashboard'
  },
]


type MenuItem = Required<MenuProps>['items'][number]

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isNavigationDrawerOpen, toggleNavigationDrawer] = useToggle(false)

  const navigationMenuItems: MenuItem[] = ROUTE_CONFIG.map(({ path, label }) => ({
    key: path,
    label: <Link key={label} to={path}>{label}</Link>,
    path,
  }))

  /*   const getNavigationMenuItems = (permissions: string): MenuItem[] => {
      switch (permissions) {
        case 'SYS_ADMIN':
          return ROUTE_CONFIG.map(({ path, label }) => ({
            key: path,
            label: <Link key={label} to={path}>{label}</Link>,
            path,
          }))
        default:
          return []
      }
    } */

  return (
    <S.Container>
      <S.LogoContainer onClick={() => { navigate('/') }}>
        <S.LogoTextContainer>
          <S.LogoText>Base de Conhecimento</S.LogoText>
        </S.LogoTextContainer>
      </S.LogoContainer>
      <S.MenuContainer>
        <S.HeaderActionsContainer>
          <S.MenuButton type="text" onClick={toggleNavigationDrawer}>
            Menu
            <MenuOutlined style={{ fontSize: 24 }} />
          </S.MenuButton>
        </S.HeaderActionsContainer>
      </S.MenuContainer>

      <S.MenuDrawer
        title="Menu"
        placement="right"
        onClose={toggleNavigationDrawer}
        open={isNavigationDrawerOpen}
        width={350}
        closable={false}
        className="drawer-menu"
        extra={<CloseOutlined onClick={toggleNavigationDrawer} />}
      /*         footer={
                <S.LogOutButton type="default" onClick={() => clearAllCaches()}>
                  Logout
                </S.LogOutButton>
              } */
      >
        <S.MenuContent>
          <Menu mode="inline" items={navigationMenuItems} selectedKeys={[location.pathname]} />
        </S.MenuContent>
      </S.MenuDrawer>
    </S.Container>
  )
}
