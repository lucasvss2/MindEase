// ===== Theme Color Definitions =====

const colors = {
  transparent: 'transparent',
  none: 'none',
  blue50: '#EFF6FF',
  blue100: '#E4F0FF',
  blue125: '#E3F2FD',
  blue150: '#EBF4FF',
  blue200: '#DBEBFF',
  blue250: '#D1E9FF',
  blue275: '#D0E4FF',
  blue300: '#CADDFF',
  blue350: '#BBDEFB',
  blue400: '#5EA4FE',
  blue425: '#A2C9FF',
  blue435: '#C7DFFE',
  blue445: '#D1E6FF',
  blue450: '#8ECAFF',
  blue500: '#3BA2F3',
  blue550: '#66B2FF',
  blue575: '#50ADFF',
  blue600: '#008FFF',
  blue650: '#2563EB',
  blue700: '#2170B5',
  blue725: '#1581B7',
  blue750: '#46A4D2',
  blue800: '#5276A8',
  blue815: '#4a6b9c',
  blue850: '#3D5A85',
  blue900: '#004B70',
  blue915: '#0A5F8A',
  blue925: '#004C72',
  blue950: '#003366',
  blue975: '#002D63',
  blue1000: '#001D33',
  red50: '#FFEBEE',
  red100: '#FFB1A3',
  red150: '#FFCDD2',
  red200: '#FEE2E2',
  red300: '#FF9683',
  red400: '#FF6C47',
  red500: '#F84929',
  red515: '#EF4444',
  red600: '#C22929',
  red700: '#C9280C',
  red750: '#B71C1C',
  red800: '#751721',
  red825: '#9A2A17',
  red850: '#940000',
  red900: '#6E2215',
  red925: '#7F0000',
  red950: '#6B1304',
  red1000: '#43150D',
  yellow50: '#FFF9C4',
  yellow100: '#FFF2BC',
  yellow150: '#FEF3C7',
  yellow200: '#FFEE58',
  yellow600: '#9F8000',
  yellow650: '#D4A017',
  yellow800: '#856404',
  yellow950: '#5C3D00',
  neutral0: '#FFFFFF',
  neutral40: '#F8F8F8',
  neutral50: '#F8F9F9',
  neutral75: '#F5F5F5',
  neutral125: '#EDEBEB',
  neutral150: '#EAE9E9',
  neutral200: '#EDEDED',
  neutral225: '#E2E2E2',
  neutral250: '#E8E8E8',
  neutral275: '#E3E3E3',
  neutral300: '#E3DDDD',
  neutral325: '#D1CDCD',
  neutral350: '#D9D9D9',
  neutral400: '#8a858517',
  neutral425: '#dfd8d817',
  neutral550: '#727272',
  neutral600: '#79747E',
  neutral625: '#636363',
  neutral650: '#615E5E',
  neutral700: '#5A5A5A',
  neutral725: '#5B5B5B',
  neutral750: '#5C5C5C',
  neutral800: '#3B3A3A',
  neutral825: '#585858',
  neutral845: '#3A3636',
  neutral850: '#383838',
  neutral875: '#4D4D4D',
  neutral880: '#4A4A4A',
  neutral890: '#444444',
  neutral900: '#2F2E2E',
  neutral925: '#2B2B2B',
  neutral930: '#292929',
  neutral950: '#1B2332',
  neutral975: '#030303',
  neutral1000: '#000000',
  teal900: '#004239',
}

export const themeColors = {
  light: {
    brand: '#7fb3d5ff',
    bgColor: colors.neutral0,
    borderHeader: colors.neutral250,
    black: '#000000',

    link: '#7fb3d5ff',
    linkActive: '#7fb3d5ff',
    linkHover: '#badb91',

    titleText: colors.neutral800,
    text: colors.neutral800,
    error: '#fe2000',
    colorBorderPrimary: '#D9D9D9',

    //button-default
    //state-default
    buttonDefaultBG: colors.blue50,
    buttonDefaultText: colors.blue975,
    buttonDefaultBorder: colors.none,
    //state-active
    buttonDefaultActiveBG: colors.blue50,
    buttonDefaultActiveText: colors.blue975,
    buttonDefaultActiveBorder: `1px solid ${colors.blue650}`,
    //state-hover
    buttonDefaultHoverBG: colors.blue275,
    buttonDefaultHoverText: colors.blue975,
    buttonDefaultHoverBorder: `1px solid ${colors.blue650}`,

    //button-dashed
    //state-default
    buttonDashedBG: colors.neutral0,
    buttonDashedText: colors.neutral950,
    buttonDashedBorder: `1px dashed ${colors.blue650}`,
    //state-active
    buttonDashedActiveBG: colors.neutral250,
    buttonDashedActiveText: colors.neutral930,
    buttonDashedActiveBorder: `1px dashed ${colors.blue400}`,
    //state-hover
    buttonDashedHoverBG: colors.neutral350,
    buttonDashedHoverText: colors.neutral850,
    buttonDashedHoverBorder: `1px dashed ${colors.blue600}`,

    //button-outlined
    //state-default
    buttonOutlinedBG: colors.blue50,
    buttonOutlinedText: colors.neutral950,
    buttonOutlinedBorder: `1px solid ${colors.blue400}`,
    //state-active
    buttonOutlinedActiveBG: colors.blue445,
    buttonOutlinedActiveText: colors.blue975,
    buttonOutlinedActiveBorder: `1px solid ${colors.blue575}`,
    //state-hover
    buttonOutlinedHoverBG: colors.blue435,
    buttonOutlinedHoverText: colors.blue975,
    buttonOutlinedHoverBorder: `1px solid ${colors.blue650}`,

    //button-neutral -> serves as disabled button
    //state-default
    buttonNeutralBG: colors.neutral400,
    buttonNeutralText: colors.neutral850,
    buttonNeutralBorder: colors.none,
    //state-active
    buttonNeutralActiveBG: colors.neutral125,
    buttonNeutralActiveText: colors.neutral845,
    buttonNeutralActiveBorder: `1px solid ${colors.neutral600}`,
    //state-hover
    buttonNeutralHoverBG: colors.neutral125,
    buttonNeutralHoverText: colors.neutral850,
    buttonNeutralHoverBorder: `1px solid ${colors.neutral600}`,

    //button-link
    //state-default
    buttonLinkBG: colors.transparent,
    buttonLinkText: colors.neutral850,
    buttonLinkBorder: colors.none,
    //state-active
    buttonLinkActiveBG: colors.neutral0,
    buttonLinkActiveText: colors.neutral850,
    buttonLinkActiveBorder: colors.none,
    //state-hover
    buttonLinkHoverBG: colors.neutral0,
    buttonLinkHoverText: colors.neutral850,
    buttonLinkHoverBorder: colors.none,

    //input-default
    inputDefaultBG: colors.neutral0,
    inputDefaultText: colors.neutral800,
    inputDefaultLabel: colors.neutral800,
    inputDefaultBorder: `1px solid ${colors.neutral800}`,
    inputDefaultPlaceholder: colors.neutral800,

    //input-error
    inputErrorBG: colors.neutral0,
    inputErrorText: colors.red850,
    inputErrorLabel: colors.neutral800,
    inputErrorBorder: `1px solid ${colors.red850}`,
    inputErrorPlaceholder: colors.neutral930,

    //dialog-danger
    dialogDangerBG: colors.neutral40,
    dialogDangerText: colors.red900,
    dialogDangerTitle: colors.red900,
    dialogDangerBorder: `1px solid ${colors.red700}`,
    //dialog-default
    dialogDefaultBG: colors.neutral50,
    dialogDefaultText: colors.neutral800,
    dialogDefaultTitle: colors.neutral800,
    dialogDefaultBorder: `1px solid ${colors.neutral350}`,

    //switch-active
    switchActiveBG: colors.blue915,
    switchActiveHandle: colors.neutral225,
    //switch-inactive
    switchInactiveBG: colors.neutral600,
    switchInactiveHandle: colors.neutral200,

    //slider
    sliderHandle: colors.blue725,
    sliderBG: colors.neutral350,
    sliderBorder: colors.neutral600,

    //carousel
    activeDotColor: colors.blue50,
    inactiveDotColor: colors.neutral400,

    //card
    cardBG: colors.neutral50,
    cardText: colors.neutral800,
    cardTitle: colors.neutral800,
    cardBorder: `1px solid ${colors.neutral300}`,
    cardDivider: colors.neutral300,
  },

  lightLowContrast: {
    brand: '#7fb3d5ff',
    bgColor: colors.neutral0,
    borderHeader: colors.neutral250,
    black: '#000000',

    link: '#a8c8dc',
    linkActive: '#a8c8dc',
    linkHover: '#c8e8b0',

    titleText: colors.neutral825,
    text: colors.neutral550,
    colorBorderPrimary: '#e0e0e0',
    error: '#e85040',

    //button-default
    //state-default
    buttonDefaultBG: colors.blue50,
    buttonDefaultText: colors.blue815,
    buttonDefaultBorder: colors.none,
    //state-active
    buttonDefaultActiveBG: colors.blue50,
    buttonDefaultActiveText: colors.blue815,
    buttonDefaultActiveBorder: `1px solid ${colors.blue425}`,
    //state-hover
    buttonDefaultHoverBG: colors.blue100,
    buttonDefaultHoverText: colors.blue815,
    buttonDefaultHoverBorder: `1px solid ${colors.blue425}`,

    //button-dashed
    //state-default
    buttonDashedBG: colors.neutral0,
    buttonDashedText: colors.neutral875,
    buttonDashedBorder: `1px dashed ${colors.blue650}`,
    //state-active
    buttonDashedActiveBG: colors.neutral75,
    buttonDashedActiveText: colors.neutral875,
    buttonDashedActiveBorder: `1px dashed ${colors.blue400}`,
    //state-hover
    buttonDashedHoverBG: colors.neutral125,
    buttonDashedHoverText: colors.neutral875,
    buttonDashedHoverBorder: `1px dashed ${colors.blue600}`,

    //button-outlined
    //state-default
    buttonOutlinedBG: colors.blue50,
    buttonOutlinedText: colors.neutral850,
    buttonOutlinedBorder: `1px solid ${colors.blue425}`,
    //state-active
    buttonOutlinedActiveBG: colors.blue125,
    buttonOutlinedActiveText: colors.blue850,
    buttonOutlinedActiveBorder: `1px solid ${colors.blue450}`,
    //state-hover
    buttonOutlinedHoverBG: colors.blue100,
    buttonOutlinedHoverText: colors.blue815,
    buttonOutlinedHoverBorder: `1px solid ${colors.blue400}`,

    //button-neutral -> serves as disabled button
    //state-default
    buttonNeutralBG: colors.neutral250,
    buttonNeutralText: colors.neutral650,
    buttonNeutralBorder: colors.none,
    //state-active
    buttonNeutralActiveBG: colors.neutral150,
    buttonNeutralActiveText: colors.neutral750,
    buttonNeutralActiveBorder: colors.none,
    //state-hover
    buttonNeutralHoverBG: colors.neutral150,
    buttonNeutralHoverText: colors.neutral750,
    buttonNeutralHoverBorder: `1px solid ${colors.neutral625}`,

    //button-link
    //state-default
    buttonLinkBG: colors.transparent,
    buttonLinkText: colors.neutral625,
    buttonLinkBorder: colors.none,
    //state-active
    buttonLinkActiveBG: colors.neutral0,
    buttonLinkActiveText: colors.neutral625,
    buttonLinkActiveBorder: colors.none,
    //state-hover
    buttonLinkHoverBG: colors.neutral0,
    buttonLinkHoverText: colors.neutral625,
    buttonLinkHoverBorder: colors.none,

    //input-default
    inputDefaultBG: colors.neutral0,
    inputDefaultText: colors.neutral600,
    inputDefaultLabel: colors.neutral600,
    inputDefaultBorder: `1px solid ${colors.neutral600}`,
    inputDefaultPlaceholder: colors.neutral600,

    //input-error
    inputErrorBG: colors.neutral0,
    inputErrorText: colors.red600,
    inputErrorLabel: colors.neutral600,
    inputErrorBorder: `1px solid ${colors.red600}`,
    inputErrorPlaceholder: colors.neutral600,

    //dialog-danger
    dialogDangerBG: colors.neutral40,
    dialogDangerText: colors.red825,
    dialogDangerTitle: colors.red825,
    dialogDangerBorder: `1px solid ${colors.red825}`,
    //dialog-default
    dialogDefaultBG: colors.neutral50,
    dialogDefaultText: colors.neutral800,
    dialogDefaultTitle: colors.neutral725,
    dialogDefaultBorder: `1px solid ${colors.neutral40}`,

    //switch-active
    switchActiveBG: colors.blue750,
    switchActiveHandle: colors.neutral925,
    //switch-inactive
    switchInactiveBG: colors.neutral600,
    switchInactiveHandle: colors.neutral300,

    //slider
    sliderHandle: colors.blue750,
    sliderBG: colors.neutral350,
    sliderBorder: colors.neutral825,

    //carousel
    activeDotColor: colors.blue50,
    inactiveDotColor: colors.neutral400,

    //card
    cardBG: colors.neutral75,
    cardText: colors.neutral550,
    cardTitle: colors.neutral825,
    cardBorder: `1px solid ${colors.neutral325}`,
    cardDivider: colors.neutral325,
  },

  lightHighContrast: {
    brand: '#7fb3d5ff',
    bgColor: colors.neutral0,
    borderHeader: colors.neutral250,
    black: '#000000',

    link: '#0066cc',
    linkActive: '#003366',
    linkHover: '#004d99',

    titleText: colors.neutral1000,
    text: colors.neutral900,
    colorBorderPrimary: '#000000',
    error: '#cc0000',

    //button-default
    //state-default
    buttonDefaultBG: colors.blue50,
    buttonDefaultText: colors.neutral950,
    buttonDefaultBorder: colors.none,
    //state-active
    buttonDefaultActiveBG: colors.blue50,
    buttonDefaultActiveText: colors.neutral950,
    buttonDefaultActiveBorder: `1px solid ${colors.blue400}`,
    //state-hover
    buttonDefaultHoverBG: colors.blue100,
    buttonDefaultHoverText: colors.neutral950,
    buttonDefaultHoverBorder: colors.none,

    //button-dashed
    //state-default
    buttonDashedBG: colors.neutral0,
    buttonDashedText: colors.neutral1000,
    buttonDashedBorder: `1px dashed ${colors.blue400}`,
    //state-active
    buttonDashedActiveBG: colors.neutral75,
    buttonDashedActiveText: colors.neutral1000,
    buttonDashedActiveBorder: `1px dashed ${colors.blue400}`,
    //state-hover
    buttonDashedHoverBG: colors.neutral50,
    buttonDashedHoverText: colors.neutral1000,
    buttonDashedHoverBorder: `1px dashed ${colors.blue400}`,

    //button-outlined
    //state-default
    buttonOutlinedBG: colors.blue50,
    buttonOutlinedText: colors.neutral950,
    buttonOutlinedBorder: `1px solid ${colors.blue400}`,
    //state-active
    buttonOutlinedActiveBG: colors.blue200,
    buttonOutlinedActiveText: colors.neutral1000,
    buttonOutlinedActiveBorder: `1px solid ${colors.blue500}`,
    //state-hover
    buttonOutlinedHoverBG: colors.blue300,
    buttonOutlinedHoverText: colors.neutral1000,
    buttonOutlinedHoverBorder: `1px solid ${colors.blue600}`,

    //button-neutral -> serves as disabled button
    //state-default
    buttonNeutralBG: colors.neutral400,
    buttonNeutralText: colors.neutral1000,
    buttonNeutralBorder: colors.none,
    //state-active
    buttonNeutralActiveBG: colors.neutral275,
    buttonNeutralActiveText: colors.neutral1000,
    buttonNeutralActiveBorder: colors.none,
    //state-hover
    buttonNeutralHoverBG: colors.neutral275,
    buttonNeutralHoverText: colors.neutral1000,
    buttonNeutralHoverBorder: `1px solid ${colors.neutral925}`,

    //button-link
    //state-default
    buttonLinkBG: colors.transparent,
    buttonLinkText: colors.neutral1000,
    buttonLinkBorder: colors.none,
    //state-active
    buttonLinkActiveBG: colors.neutral0,
    buttonLinkActiveText: colors.neutral1000,
    buttonLinkActiveBorder: colors.none,
    //state-hover
    buttonLinkHoverBG: colors.neutral0,
    buttonLinkHoverText: colors.neutral1000,
    buttonLinkHoverBorder: colors.none,

    //input-default
    inputDefaultBG: colors.neutral0,
    inputDefaultText: colors.neutral930,
    inputDefaultLabel: colors.neutral1000,
    inputDefaultBorder: `1px solid ${colors.neutral1000}`,
    inputDefaultPlaceholder: colors.neutral930,

    //input-error
    inputErrorBG: colors.neutral0,
    inputErrorText: colors.red950,
    inputErrorLabel: colors.neutral930,
    inputErrorBorder: `1px solid ${colors.red950}`,
    inputErrorPlaceholder: colors.neutral930,

    //switch-active
    switchActiveBG: colors.blue900,
    switchActiveHandle: colors.neutral0,
    //switch-inactive
    switchInactiveBG: colors.neutral890,
    switchInactiveHandle: colors.neutral50,

    //dialog-danger
    dialogDangerBG: colors.neutral0,
    dialogDangerText: colors.red1000,
    dialogDangerTitle: colors.red1000,
    dialogDangerBorder: `1px solid ${colors.red1000}`,
    //dialog-default
    dialogDefaultBG: colors.neutral0,
    dialogDefaultTitle: colors.neutral1000,
    dialogDefaultText: colors.neutral1000,
    dialogDefaultBorder: `1px solid ${colors.neutral350}`,

    //slider
    sliderHandle: colors.blue900,
    sliderBG: colors.neutral350,
    sliderBorder: colors.neutral890,

    //carousel
    activeDotColor: colors.blue50,
    inactiveDotColor: colors.neutral400,

    //card
    cardBG: colors.neutral0,
    cardText: colors.neutral900,
    cardTitle: colors.neutral1000,
    cardBorder: `1px solid ${colors.neutral300}`,
    cardDivider: colors.neutral600,
  },
}

// ===== Ant Design Theme =====
export const antdTheme = {
  token: {
    fontFamily: 'var(--font-sans)',
    borderRadius: 5,
  },
}

// ===== Custom Tokens =====
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
    sm: '0 4px 8px 0 rgba(88, 84, 84, 0.25)',
  },
}

// ===== Theme Types =====
export type ThemeMode = 'light' | 'light-low-contrast' | 'light-high-contrast'
export type ThemeColors = typeof themeColors.light

export const THEME_CLASSES: Record<ThemeMode, string> = {
  light: 'theme-light',
  'light-low-contrast': 'theme-light-low-contrast',
  'light-high-contrast': 'theme-light-high-contrast',
}

// ===== Breakpoints =====
export const breakpoints = {
  xl: 'only screen and (max-width: 1279px)',
  lg: 'only screen and (max-width: 1023px)',
  md: 'only screen and (max-width: 767px)',
  sm: 'only screen and (max-width: 639px)',
}

// ===== Helper: Generate CSS Variables String =====
export function generateCSSVariables(colors: ThemeColors): string {
  return Object.entries(colors)
    .map(([key, value]) => `--color-${key}: ${value};`)
    .join('\n  ')
}

/**
 * @example
  @media ${breakpoints.xl} {}
  @media ${breakpoints.lg} {}
  @media ${breakpoints.md} {}
  @media ${breakpoints.sm} {}
 */
