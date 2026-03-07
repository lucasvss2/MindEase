import { useNavigate } from 'react-router-dom'
import { Dropdown, MenuProps } from 'antd'
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { useLogout } from '@/presentation/hooks/auth'

import logo from '@/assets/images/mind-ease-icon.png'

import * as S from './styles'

interface HeaderProps {
  showUserAvatar?: boolean
}

export const Header = ({ showUserAvatar = true }: HeaderProps) => {
  const navigate = useNavigate()
  const { logout } = useLogout()

  const items: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Configurações',
      icon: <SettingOutlined />,
      onClick: () => navigate('/profile'),
    },
    {
      key: 'logout',
      label: 'Sair',
      icon: <LogoutOutlined />,
      onClick: logout,
      danger: true,
    },
  ]

  return (
    <S.Container>
      <S.LogoContainer onClick={() => { navigate('/') }}>
        <S.LogoTextContainer>
          <img src={logo} alt="MindEase-logo" width={30} height={30} />
          <S.LogoText>MindEase</S.LogoText>
        </S.LogoTextContainer>
      </S.LogoContainer>

      {showUserAvatar && (
        <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
          <S.UserAvatarContainer>
            <S.UserAvatar />
          </S.UserAvatarContainer>
        </Dropdown>
      )}
    </S.Container>
  )
}
