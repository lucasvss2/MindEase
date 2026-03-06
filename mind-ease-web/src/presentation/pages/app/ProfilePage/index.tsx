import { PageLayout } from "@/layouts";
import {
  ResponsiveButton,
  ResponsiveCard,
  FilterSidebar,
  useUser,
  useTheme,
  useToggle
} from "@/presentation";
import * as S from "./styles";
import { Skeleton } from "antd";

export function ProfilePage() {
  const { data: user, isLoading } = useUser()
  const { theme, changeTheme } = useTheme()
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(true)


  return (
    <PageLayout
      title="Perfil"
      hideFloatButton
      showUserAvatar
      sidebar={
        <FilterSidebar
          isFilterDrawerOpen={isDrawerOpen}
          onClose={toggleFilterDrawer}
          filterFooter={null}
        />
      }
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100%', gap: '24px' }}>
        <ResponsiveCard $width="45%" $height="45%">
          <S.Title>Perfil</S.Title>
          <S.Content>
            {isLoading ? (
              <Skeleton active avatar paragraph={{ rows: 2 }} />
            ) : (
              <S.InfoContainer>
                <S.Name>Nome: {user?.name}</S.Name>
                <S.Email>Email: {user?.email}</S.Email>
              </S.InfoContainer>
            )}
          </S.Content>
        </ResponsiveCard>
        <ResponsiveCard $width="45%" $height="45%">
          <S.Title>Ajustes de Interface</S.Title>
          <S.SettingsContent>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Contraste</h4>
            <S.SettingsContainer>
              <ResponsiveButton
                width="220px"
                height="56px"
                type={theme === 'light-low-contrast' ? 'default' : 'neutral'}
                onClick={() => changeTheme('light-low-contrast')}
              >
                Suave
              </ResponsiveButton>
              <ResponsiveButton
                width="220px"
                height="56px"
                type={theme === 'light' ? 'default' : 'neutral'}
                onClick={() => changeTheme('light')}
              >
                Padrão
              </ResponsiveButton>
              <ResponsiveButton
                width="220px"
                height="56px"
                type={theme === 'light-high-contrast' ? 'default' : 'neutral'}
                onClick={() => changeTheme('light-high-contrast')}
              >
                Alto
              </ResponsiveButton>
            </S.SettingsContainer>
          </S.SettingsContent>
        </ResponsiveCard>
      </div>
    </PageLayout>
  )
}