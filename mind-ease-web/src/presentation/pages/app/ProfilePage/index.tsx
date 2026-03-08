import {
  ResponsiveButton,
  ResponsiveCard,
  FilterSidebar,
  useUser,
  useTheme,
  useToggle,
  useFontSize,
  useLetterSpacing,
  useComplexity,
  usePomodoroSettings,
  useReduceMotion,
  useFont,
  ResponsiveSlider,
  ResponsiveSwitch,
  ResponsiveInput,
  PageLayout
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
  const { complexityLevel, changeComplexity } = useComplexity()
  const { transitionOverlayEnabled, setTransitionOverlayEnabled } = useReduceMotion()
  const { font, changeFont } = useFont()
  const {
    soundEnabled,
    toggleSound,
    notificationEnabled,
    toggleNotification,
    pomodoroDuration,
    setPomodoroDuration,
    breakDuration,
    setBreakDuration,
    cognitiveAlertThreshold,
    setCognitiveAlertThreshold
  } = usePomodoroSettings()

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
      <S.ConfigBody>
        <ResponsiveCard $width="100%" >
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

        <ResponsiveCard $width="100%">
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
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Fonte</h4>
            <S.SettingsContainer>
              <ResponsiveButton
                width="220px"
                height="56px"
                type={font === 'lexend' ? 'default' : 'neutral'}
                onClick={() => changeFont('lexend')}
                style={{ fontFamily: "'Lexend', sans-serif" }}
              >
                Lexend
              </ResponsiveButton>
              <ResponsiveButton
                width="220px"
                height="56px"
                type={font === 'bitter' ? 'default' : 'neutral'}
                onClick={() => changeFont('bitter')}
                style={{ fontFamily: "'Bitter', serif" }}
              >
                Bitter
              </ResponsiveButton>
              <ResponsiveButton
                width="220px"
                height="56px"
                type={font === 'jetbrains-mono' ? 'default' : 'neutral'}
                onClick={() => changeFont('jetbrains-mono')}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                JetBrains Mono
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

            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Overlay de transição entre páginas</h4>
            <S.SettingsContainer>
              <ResponsiveSwitch
                checked={transitionOverlayEnabled}
                onChange={(val) => setTransitionOverlayEnabled(val)}
              />
            </S.SettingsContainer>

            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Modo resumo - Controla a quantidade de informações exibidas nos cards de tarefa.</h4>

            <S.SettingsContent>

              <S.SettingsContainer>
                <ResponsiveSwitch
                  checked={complexityLevel === 'simplified'}
                  onChange={(checked) => changeComplexity(checked ? 'simplified' : 'normal')}
                />
              </S.SettingsContainer>
            </S.SettingsContent>
          </S.SettingsContent>

        </ResponsiveCard>
        <ResponsiveCard $width="100%">
          <S.Title>Configurações do Pomodoro</S.Title>
          <S.SettingsSwitchContent>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Sons</h4>
            <S.SettingsContainer>
              <ResponsiveSwitch
                checked={soundEnabled}
                onChange={toggleSound}
              />
            </S.SettingsContainer>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Notificações</h4>
            <S.SettingsContainer>
              <ResponsiveSwitch
                checked={notificationEnabled}
                onChange={() => {
                  if (!notificationEnabled && Notification.permission !== 'granted') {
                    Notification.requestPermission();
                  }
                  toggleNotification();
                }}
              />
            </S.SettingsContainer>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Timer</h4>
            <S.SettingsContainer>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Foco (min)</span>
                <ResponsiveInput
                  type="number"
                  placeholder="Duração do Pomodoro (min)"
                  value={pomodoroDuration}
                  min={1}
                  max={120}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    if (!isNaN(val) && val >= 1 && val <= 120) {
                      setPomodoroDuration(val)
                    }
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '12px', color: '#666' }}>Descanso (min)</span>
                <ResponsiveInput
                  type="number"
                  placeholder="Duração do descanso (min)"
                  value={breakDuration}
                  min={1}
                  max={60}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    if (!isNaN(val) && val >= 1 && val <= 60) {
                      setBreakDuration(val)
                    }
                  }}
                />
              </div>
            </S.SettingsContainer>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold' }}>Alerta de tempo (min)</h4>
            <S.SettingsContainer>
              <ResponsiveInput
                type="number"
                placeholder="Alertar após X minutos"
                value={cognitiveAlertThreshold}
                min={1}
                max={240}
                onChange={(e) => {
                  const val = parseInt(e.target.value)
                  if (!isNaN(val) && val >= 1) setCognitiveAlertThreshold(val)
                }}
              />
            </S.SettingsContainer>
          </S.SettingsSwitchContent>
        </ResponsiveCard>
      </S.ConfigBody>
    </PageLayout>
  )
}
