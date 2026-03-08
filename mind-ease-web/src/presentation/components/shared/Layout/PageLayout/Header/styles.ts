import { Layout, Typography } from 'antd'
import { styled } from '@linaria/react'
import { UserOutlined } from '@ant-design/icons'

export const Container = styled(Layout.Header)`
  height: 50px;
  padding: 0 16px;
  background-color: var(--color-bgColor);
  border-bottom: 1px solid var(--color-borderHeader);

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

export const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 5px;
  gap: 8px;
`

export const LogoText = styled(Typography.Text)`
  font-size: 20px;
  font-weight: 700;
  color: var(--color-brand);
`

export const UserAvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid var(--color-brand);
  border-radius: 50%;
`

export const UserAvatar = styled(UserOutlined)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: var(--color-brand);
`