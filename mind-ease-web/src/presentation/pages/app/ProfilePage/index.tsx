import { PageLayout } from "@/layouts";
import {
  ResponsiveButton,
  ResponsiveCard,
  FilterSidebar,
  useUser,
  useTheme,
  useToggle,
  useFontSize,
  useLetterSpacing,
  ResponsiveSlider
} from "@/presentation";
import * as S from "./styles";
import { Skeleton } from "antd";
import dayjs from "dayjs";

export function ProfilePage() {
  const { data: user, isLoading } = useUser()
  const { theme, changeTheme } = useTheme()
  const [isDrawerOpen, toggleFilterDrawer] = useToggle(true)
  const { fontSizeLevel, changeFontSize } = useFontSize()
  const { letterSpacingLevel, changeLetterSpacing } = useLetterSpacing()

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
        <ResponsiveCard $width="40%" $height="65%">
          <S.Title>Perfil</S.Title>
          <S.Content>
            {isLoading ? (
              <Skeleton active avatar paragraph={{ rows: 2 }} />
            ) : (
              <S.InfoContainer>
                <S.Name>Nome: {user?.name}</S.Name>
                <S.Email>Email: {user?.email}</S.Email>
                <S.Email>Se juntou ao MindEase em: {dayjs(user?.createdAt).format('DD/MM/YYYY')}</S.Email>
              </S.InfoContainer>
            )}
          </S.Content>
        </ResponsiveCard>
        <ResponsiveCard $width="50%" $height="65%">
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
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Tamanho do Texto</h4>
            <ResponsiveSlider
              value={fontSizeLevel}
              onChange={(val: number) => changeFontSize(val as 1 | 2 | 3)}
              marks={{
                1: 'Pequeno',
                2: 'Médio',
                3: 'Grande',
              }}
              step={1}
              min={1}
              max={3}
            />
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Espaçamento entre letras</h4>
            <ResponsiveSlider
              value={letterSpacingLevel}
              onChange={(val: number) => changeLetterSpacing(val as 1 | 2 | 3)}
              marks={{
                1: 'Pequeno',
                2: 'Médio',
                3: 'Grande',
              }}
              step={1}
              min={1}
              max={3}
            />
          </S.SettingsContent>

        </ResponsiveCard>
      </div>
    </PageLayout>
  )
}