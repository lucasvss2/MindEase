import { THEME_COLORS } from "@/presentation/constants/theme";

export interface SectionItem {
  title: string;
  description: string;
  completed: number;
  total: number;
}

export type SectionKey = "paraFazer" | "emProgresso" | "concluido";

/** Dados mockados das seções (colunas) da tela de detalhes do quadro. */
export const SECTION_CONTENT: Record<
  SectionKey,
  { bg: string; items: SectionItem[] }
> = {
  paraFazer: {
    bg: THEME_COLORS.section.paraFazer,
    items: [
      {
        title: "Revisar documentação",
        description: "Revisar contratos e enviar feedback até sexta.",
        completed: 0,
        total: 2,
      },
      {
        title: "Preparar apresentação",
        description: "Slides e ensaio para a reunião de segunda.",
        completed: 1,
        total: 3,
      },
    ],
  },
  emProgresso: {
    bg: THEME_COLORS.section.emProgresso,
    items: [
      {
        title: "Desenvolver API",
        description: "Endpoints de autenticação e listagem.",
        completed: 2,
        total: 4,
      },
      {
        title: "Revisar PRs",
        description: "Code review dos PRs em aberto.",
        completed: 1,
        total: 3,
      },
    ],
  },
  concluido: {
    bg: THEME_COLORS.section.concluido,
    items: [
      {
        title: "Setup do projeto",
        description: "Configuração inicial concluída.",
        completed: 2,
        total: 2,
      },
    ],
  },
};
