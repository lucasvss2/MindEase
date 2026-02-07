export const antdTheme = {
  token: {
    fontFamily: 'Lexend, JetBrains Mono, sans-serif',
    borderRadius: 5,
  },
}


export const customTokens = {
  margin: {
    XS: 8,
    XL: 32,
    default: 16,
    LG: 24,
  },
  fontSize: {
    icon: 8,
    XS: 10,
    SM: 12,
    default: 14,
    LG: 16,
    XL: 20,
    heading: {
      h3: 48,
      h4: 34,
      h5: 32,
    },
  },
  lineHeight: {
    default: 1,
  },
  text: {
    black: '#000',
    darkGray: '#434343',
    lightGray: '#A9A9A9',
    secondary: '#4A91FD',
    collapseHeaderText: 'rgb(67, 67, 67)',
    tableHeaderText: '#5F5F5F',
  },
  input: {
    label: '#6C6C6C',
  },
  step: {
    disabledColor: '#8C8C8C',
  },
  divider: {
    gray: '#666666',
    lightGray: '#D9D9D9',
  },
  tab: {
    selectedColor: '#434343',
  },
  listBox: {
    bgScrollBar: '#999999',
  },
  listItem: {
    bgColor: '#fafafa',
  },
  header: {
    bgColor: '#434343',
  },
  boxShadow: {
    'sm': '0 4px 8px 0 rgba(88, 84, 84, 0.25)',
  }
}

export const styledTheme = {
  colors: {
    black: '#000',
    brand: '#7fb3d5ff',
    darkGreen: '#5EA320',
    link: '#7fb3d5ff',
    linkActive: '#7fb3d5ff',
    linkHover: '#badb91',
    text: '#242425',
    colorBorderPrimary: '#D9D9D9',
    error: '#fe2000',
    bgColor: '#434343',
    lightGray: '#A9A9A9',
    blue50: '#EFF6FF',
    blue100: '#E4F0FF',
    blue200: '#DBEBFF',
    blue300: '#CADDFF',
    blue400: '#5EA4FE',
    blue500: '#3BA2F3',
    blue600: '#008FFF',
    red100: '#FFB1A3',
    red500: '#F84929',
    red700: '#C9280C',
    red800: '#751721',
    red900: '#6E2215',
    yellow100: '#FFF2BC',
    yellow600: '#9F8000',
    neutral0: '#ffffff',
    neutral50: '#F8F9F9',
    neutral100: '#F5F5F5',
    neutral200: '#EDEDED',
    neutral250: '#E8E8E8',
    neutral300: '#E3DDDD',
    neutral400: '#8a858517',
    neutral600: '#79747E',
    neutral800: '#3B3A3A',
    neutral850: '#383838',
    neutral900: '#2F2E2E',
    neutral925: '#2B2B2B',
    neutral930: '#292929',
    neutral950: '#1B2332',
    neutral1000: '#000000',
    teal900: '#004239',
  },
  base: antdTheme,
  customTokens: customTokens,
  breakpoints: {
    xl: 'only screen and (max-width: 1279px)',
    lg: 'only screen and (max-width: 1023px)',
    md: 'only screen and (max-width: 767px)',
    sm: 'only screen and (max-width: 639px)',
  },
}

/**
 * @example
  @media ${({ theme }) => theme.breakpoints.xl} {}
  @media ${({ theme }) => theme.breakpoints.lg} {}
  @media ${({ theme }) => theme.breakpoints.md} {}
  @media ${({ theme }) => theme.breakpoints.sm} {}
 */
