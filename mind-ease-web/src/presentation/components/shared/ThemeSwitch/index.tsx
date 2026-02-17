import { useTheme } from '@/presentation/hooks/shared/useTheme'
import * as S from './styles'

export const ThemeSwitch = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <S.Container>
      <S.Option
        isActive={theme === 'light'}
        onClick={() => changeTheme('light')}
        type="button"
      >
        Padrão
      </S.Option>
      <S.Option
        isActive={theme === 'light-low-contrast'}
        onClick={() => changeTheme('light-low-contrast')}
        type="button"
      >
        Suave
      </S.Option>
      <S.Option
        isActive={theme === 'light-high-contrast'}
        onClick={() => changeTheme('light-high-contrast')}
        type="button"
      >
        Alto
      </S.Option>
    </S.Container>
  )
}
