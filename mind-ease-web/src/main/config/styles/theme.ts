
export const antdTheme = {
  token: {
    colorPrimary: '#80c343',
    colorSecundary: '#5EA320',
    colorLink: '#80c343',
    colorLinkActive: '#80c343',
    colorLinkHover: '#badb91',
    colorTextBase: '#414243',
    colorBgLayout: '#f5f5f5',
    colorBorderSecondary: '#e2e4e7',
    colorWhite: '#fff',
    colorBlack: '#000',
    colorText: '#242425',
    colorIcon: '#5e6a71',
    fontFamily: 'MindEase',
    borderRadius: 5,
    colorInfo: '#6ea5f8',
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
}

export const styledTheme = {
  colors: {
    white: antdTheme.token.colorWhite,
    black: antdTheme.token.colorBlack,
    brand: antdTheme.token.colorPrimary,
    darkGreen: antdTheme.token.colorSecundary,
    link: antdTheme.token.colorLink,
    linkActive: antdTheme.token.colorLinkActive,
    linkHover: antdTheme.token.colorLinkHover,
    text: antdTheme.token.colorText,
    colorBorderPrimary: '#D9D9D9',
    error: '#fe2000',
    blue: '#4A91FD',
    matteBlue: '#6B9BE4',
    navyBlue: '#0753C6',
    bgColor: '#434343',
    lightGray: '#A9A9A9',
  },
  base: antdTheme.token,
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
