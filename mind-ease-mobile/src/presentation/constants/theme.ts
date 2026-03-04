/**
 * Constantes de tema (cores em hex).
 * Alinhadas ao tailwind.config.js para uso em StatusBar, SVG, etc.
 */
export const THEME_COLORS = {
  blue: {
    50: "#EFF6FF",
    100: "#E4F0FF",
    200: "#DBEBFF",
    300: "#CADDFF",
    400: "#5EA4FE",
    500: "#3BA2F3",
    600: "#008FFF",
  },
  neutral: {
    0: "#FFFFFF",
    50: "#F8F9F9",
    100: "#F5F5F5",
    200: "#EDEDED",
    300: "#E3DDDD",
    600: "#79747E",
    950: "#1B2332",
    1000: "#000000",
  },
  /** Cor do anel de fundo do TimerRing (neutro/cinza) */
  timerRing: {
    ring: "#D4DAE3",
    progress: "#5EA4FE",
    /** Cor quando faltam 10% ou menos do tempo */
    urgent: "#F59E0B",
  },
  /** Tela Focus: fundo e StatusBar */
  focus: {
    background: "#E4F0FF",
    statusBar: "#E4F0FF",
  },
  /** Tela Rest: fundo e StatusBar */
  rest: {
    background: "#F0FDF4",
    statusBar: "#F0FDF4",
  },
  /** Fundos das seções (colunas) na tela de detalhes do quadro */
  section: {
    paraFazer: "#FEF2F2",
    emProgresso: "#FFFBEB",
    concluido: "#F0FDF4",
  },
} as const;
