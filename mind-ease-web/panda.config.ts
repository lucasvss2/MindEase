import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],
  minify: true,
  // Files to exclude
  exclude: [],

  conditions: {
    light: '[data-color-mode=light] &',
    dark: '[data-color-mode=dark] &',
  },

  // Theme variants config
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          /* --- Brand & Icon Colors --- */
          brandPrimary: { value: { _light: '#2D8C96', _dark: '#89F0D1' } },
          brandSecondary: { value: { _light: '#6AB2E4', _dark: '#A3D5F7' } },

          /* Gradientes sugeridos para fundos especiais ou headers */
          brandGradientStart: { value: { _light: '#A3D5F7', _dark: '#2A4555' } },
          brandGradientEnd: { value: { _light: '#89F0D1', _dark: '#1F3A33' } },

          /* --- Backgrounds --- */
          mainBackground: { value: { _light: '#F4F8FA', _dark: '#121416' } },
          modalBackground: { value: { _light: '#FFFFFF', _dark: '#1C2023' } },
          secondaryBackground: { value: { _light: '#FFFFFF', _dark: '#25292D' } },
          keyboardBackground: { value: { _light: '#FFFFFF', _dark: '#151719' } },

          /* Fundo translúcido para efeitos de vidro (Glassmorphism) */
          transparentSecondaryBackground: { value: { _light: '#ffffffcc', _dark: '#25292db3' } },

          /* --- Typography --- */
          text: { value: { _light: '#2C3E50', _dark: '#E0E6ED' } },
          textReverse: { value: { _light: '#E0E6ED', _dark: '#2C3E50' } },
          textHeader: { value: { _light: '#E0E6ED', _dark: '#E0E6ED' } },
          textMuted: { value: { _light: '#64748B', _dark: '#94A3B8' } },
          fontBgColor: { value: { _light: '#475569', _dark: '#CBD5E1' } },
          fontLabelColor: { value: { _light: '#334155', _dark: '#F1F5F9' } },

          /* --- UI Elements --- */
          separator: { value: { _light: '#E2E8F0', _dark: '#334155' } },
          colorBorderSecondary: { value: { _light: '#CBD5E1', _dark: '#475569' } },
          selectedPageColor: { value: { _light: '#0F172A', _dark: '#F8FAFC' } },
          information: { value: { _light: '#3B82F6', _dark: '#60A5FA' } },

          /* --- Tables (Foco em clareza para o Kanban/Listas) --- */
          tableLightColor: { value: { _light: '#F1F5F9', _dark: '#1E293B' } },
          tableDarkColor: { value: { _light: '#FFFFFF', _dark: '#0F172A' } },
          tableFontColor: { value: { _light: '#334155', _dark: '#F8FAFC' } },
          tableHeaderFont: { value: { _light: '#475569', _dark: '#94A3B8' } },
          tableHeaderText: { value: { _light: '#64748B', _dark: '#CBD5E1' } },

          /* --- Tags & Status (Cores Pastel para Acessibilidade Cognitiva) --- */
          tagFontColor: { value: { _light: '#475569', _dark: '#E2E8F0' } },
          tagBackgroundColor: { value: { _light: '#E2E8F0', _dark: '#334155' } },

          /* --- Fixed Colors & Functional --- */
          white: { value: { _light: '#fff', _dark: '#fff' } },
          black: { value: { _light: '#000', _dark: '#000' } },

          /* Success: Verde Menta alinhado à marca, não verde neon */
          successGreen: { value: { _light: '#10B981', _dark: '#34D399' } },
          successGreenBorder: { value: { _light: '#059669', _dark: '#10B981' } },
          successGreenShadow: { value: { _light: '#D1FAE5', _dark: '#064E3B' } },

          /* Interações de Marca */
          brandHover: { value: { _light: '#89F0D1', _dark: '#2D8C96' } },
          brandShadow: { value: { _light: '#A3D5F7', _dark: '#164E63' } },

          /* Functional Colors */
          blue: { value: { _light: '#3B82F6', _dark: '#60A5FA' } },
          /* Error: */
          error: { value: { _light: '#F43F5E', _dark: '#FB7185' } },
          orange: { value: { _light: '#F97316', _dark: '#FB923C' } },

          /* Semantic Aliases */
          Success: { value: { _light: '#14B8A6', _dark: '#2DD4BF' } },
          Warning: { value: { _light: '#EAB308', _dark: '#FACC15' } },

          /* Neutrals */
          navyBlue: { value: { _light: '#1E3A8A', _dark: '#60A5FA' } },
          matteBlue: { value: { _light: '#64748B', _dark: '#94A3B8' } },
          lightGray: { value: { _light: '#CBD5E1', _dark: '#475569' } },
          lighterGray: { value: { _light: '#E2E8F0', _dark: '#334155' } },
          darkGray: { value: { _light: '#334155', _dark: '#334155' } },
        }
      },
    },
  },

  // Global CSS styles
  globalCss: {
    '*': {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: 'AcerFoco, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      color: '{colors.text}',
      backgroundColor: '{colors.mainBackground}',
    },
    'h1, h2, h3, h4, h5, h6': {
      margin: '0',
      fontWeight: '400',
      color: '{colors.text}',
    },
    '.ant-form-item-explain-error': {
      backgroundPosition: '8px center',
      color: '{colors.error}',
      border: '1px solid {colors.error}',
      backgroundColor: 'rgba(254, 32, 0, 0.1)',
      padding: '0 12px 0 24px',
      borderRadius: '4px',
      margin: '4px 0 8px',
    },
    '.ant-form-show-help-item': {
      height: '0px !important',
      padding: '0px !important',
      margin: '0px !important',
      display: 'none !important',
    },
  },
  // The output directory for your css system
  outdir: "src/shared/styles/styled-system",
});