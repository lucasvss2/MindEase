import { useLocation, useNavigate } from 'react-router-dom'
import {
  CloseOutlined,
  MenuOutlined
} from '@ant-design/icons'
import {
  Menu,
} from 'antd'

import {
  useToggle
} from '@/presentation'
import logo from '@/assets/images/mind-ease-icon.png'

import * as S from './styles'

export const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [isNavigationDrawerOpen, toggleNavigationDrawer] = useToggle(false)


  return (
    <S.Container>
      <S.LogoContainer onClick={() => { navigate('/') }}>
        <S.LogoTextContainer>
          <img src={logo} alt="MindEase-logo" width={30} height={30} />
          <S.LogoText>MindEase</S.LogoText>
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
        footer={
          <S.LogOutButton type="default" onClick={() => { }}>
            Logout
          </S.LogOutButton>
        }
      >
        <S.MenuContent>
          <Menu mode="inline" items={[]} selectedKeys={[location.pathname]} />
        </S.MenuContent>
      </S.MenuDrawer>
    </S.Container>
  )
}
