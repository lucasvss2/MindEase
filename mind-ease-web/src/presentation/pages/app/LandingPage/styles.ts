import { styled } from '@linaria/react'

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: var(--color-borderHeader);
    padding: 16px 24px 24px;
    gap: 24px
`

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  background-color: var(--color-borderHeader);
  min-height: 60vh;
`;

export const SolidHeading = styled.h2`
  font-weight: 700;
  font-size: 3.5rem;
  color: #2C3E50; /* Token: text base */
  margin: 0;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.25rem;
  color: #64748B; /* Token: textMuted */
  max-width: 600px;
  margin-top: 24px;
  line-height: 1.6;
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 40px;
  
  input {
    padding: 12px 20px;
    border-radius: 8px;
    border: 1px solid #CBD5E1;
    min-width: 280px;
  }
  
  button {
    background-color: #2D8C96; /* Token: brandPrimary */
    color: white;
    padding: 12px 32px;
    border-radius: 8px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: background 0.2s;
    
    &:hover {
      background-color: #1F666E;
    }
  }
`;

export const RegisterContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 16px;
    margin: 16px 0;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    max-width: 350px;
`

export const PolyText = styled.h1`
  font-weight: 900;
  font-size: 60px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;

  background-color: #3BA2F3;
  
  background-image: 
    linear-gradient(
      135deg, 
      rgba(239, 246, 255, 0.4) 25%, 
      transparent 25%
    ),
    linear-gradient(
      225deg, 
      rgba(0, 143, 255, 0.6) 25%, 
      transparent 25%
    ),
    linear-gradient(
      315deg, 
      rgba(94, 164, 254, 0.5) 25%, 
      transparent 25%
    ),
    linear-gradient(
      45deg, 
      rgba(239, 246, 255, 0.2) 25%, 
      transparent 25%
    );

  background-size: 24px 24px;
  
  background-clip: text;
  -webkit-background-clip: text;
  
  color: transparent;
  -webkit-text-fill-color: transparent;

  filter: drop-shadow(0px 2px 0px rgba(0,0,0,0.2));
`;

export const InfoText = styled.h1`
  font-weight: 900;
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  color: var(--color-text);
  `;

export const PolyDivider = styled.div`
  width: 100%;
  height: 24px;
  min-height: 24px;
  flex-shrink: 0;
  border: none;
  
  /* Cor base (Blue 500) para garantir preenchimento caso o gradiente falhe */
  background-color: #3BA2F3; 

  background-image: 
    /* Camada 1: Facetas Claras (Luz) - Blue 50 (#EFF6FF) */
    linear-gradient(
      115deg, 
      rgba(239, 246, 255, 0.5) 20%, 
      transparent 20%
    ),
    /* Camada 2: Facetas Escuras (Sombra) - Blue 600 (#008FFF) */
    linear-gradient(
      245deg, 
      rgba(0, 143, 255, 0.5) 20%, 
      transparent 20%
    ),
    /* Camada 3: Intersecção Suave - Blue 400 (#5EA4FE) */
    linear-gradient(
      180deg, 
      rgba(94, 164, 254, 0.3) 30%, 
      transparent 30%
    );

  /* Ajuste do padrão:
     100px de largura faz os "triângulos" ficarem alongados horizontalmente,
     imitando o estilo da imagem de referência fornecida.
  */
  background-size: 100px 100%; 
  background-repeat: repeat-x;
`;