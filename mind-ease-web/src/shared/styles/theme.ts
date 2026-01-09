export const antdTheme = {
  token: {
    /* Marca Principal: Teal Profundo (Legibilidade em fundo claro) */
    colorPrimary: '#2D8C96',
    colorLink: '#2D8C96',
    colorLinkActive: '#1F666E', // Tom mais escuro para clique
    colorLinkHover: '#6AB2E4',  // Azul do ícone para hover (sensação de ar)
    
    colorWhite: '#fff',
    colorBlack: '#000',

    /* Tipografia: Slate Dark (Não é preto puro, menos agressivo) */
    colorTextBase: '#2C3E50',
    colorText: '#2C3E50',
    colorTextSecondary: '#64748B', // Adicionado para hierarquia
    
    /* Backgrounds: Off-white azulado (Calma) */
    colorBgLayout: '#F4F8FA', 
    colorBgContainer: '#FFFFFF', // Importante para Cards
    
    /* Bordas e Ícones */
    colorBorderSecondary: '#E2E8F0',
    colorIcon: '#64748B',
    
    /* Semântica Suavizada */
    colorInfo: '#6AB2E4',    // Azul Céu
    colorSuccess: '#10B981', // Verde Esmeralda (menos neon)
    colorError: '#F43F5E',   // Coral/Rose (menos alarmante que vermelho)
    colorWarning: '#EAB308', // Mostarda

    fontFamily: 'AcerFoco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    borderRadius: 12, // Aumentado para combinar com o ícone arredondado
  },
}

export const darkAntdTheme = {
  token: {
    /* Marca Principal: Verde Menta (Brilho suave em fundo escuro) */
    colorPrimary: '#89F0D1',
    colorLink: '#89F0D1',
    colorLinkActive: '#5EEAD4',
    colorLinkHover: '#2D8C96', // Teal para hover

    colorWhite: '#fff',
    colorBlack: '#000',

    /* Tipografia: Cinza Azulado Claro (Alto contraste sem ofuscar) */
    colorTextBase: '#E0E6ED',
    colorText: '#E0E6ED',
    colorTextSecondary: '#94A3B8',

    /* Backgrounds: Gunmetal/Deep Slate (Foco profundo) */
    colorBgLayout: '#121416', // Quase preto, levemente azulado
    colorBgContainer: '#1C2023', // Cards um pouco mais claros
    
    /* Bordas e Ícones */
    colorBorderSecondary: '#334155',
    colorIcon: '#94A3B8',
    
    /* Semântica Dark Mode */
    colorInfo: '#6AB2E4',
    colorSuccess: '#34D399',
    colorError: '#FB7185', // Rose claro
    colorWarning: '#FACC15',

    fontFamily: 'AcerFoco, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    borderRadius: 12,
  },
}

export const customTokens = {
  margin: { XS: 8, XL: 32, default: 16, LG: 24 },
  fontSize: {
    icon: 14, // Aumentei levemente para acessibilidade (era 8)
    XS: 12,   // Aumentei levemente (era 10)
    SM: 14,
    default: 16, // Texto padrão 16px é melhor para leitura cognitiva
    LG: 18,
    XL: 22,
    heading: { h3: 48, h4: 34, h5: 32 },
  },
  lineHeight: { default: 1.5 }, // Aumentei para "Respiro" visual (Ease)
}