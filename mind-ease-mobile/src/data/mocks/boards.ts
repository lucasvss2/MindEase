import type { IBoardCardData } from "@/presentation/components";
import { THEME_COLORS } from "@/presentation/constants/theme";

/** Dados mockados de quadros para desenvolvimento e protótipos. */
export const MOCK_BOARDS: IBoardCardData[] = [
  {
    id: "1",
    title: "Quadro Trabalho",
    taskCount: 12,
    hours: 8,
    minutes: 2,
    color: THEME_COLORS.blue[400],
  },
  {
    id: "2",
    title: "Quadro Estudos",
    taskCount: 8,
    hours: 1,
    minutes: 30,
    color: "#004239",
  },
  {
    id: "3",
    title: "Quadro Pessoal",
    taskCount: 5,
    hours: 0,
    minutes: 45,
    color: "#9F8000",
  },
  {
    id: "4",
    title: "Quadro Projetos",
    taskCount: 6,
    hours: 4,
    minutes: 15,
    color: "#7C3AED",
  },
  {
    id: "5",
    title: "Quadro Saúde",
    taskCount: 4,
    hours: 2,
    minutes: 30,
    color: "#059669",
  },
  {
    id: "6",
    title: "Quadro Criativo",
    taskCount: 9,
    hours: 3,
    minutes: 0,
    color: "#DC2626",
  },
  {
    id: "7",
    title: "Quadro Leitura",
    taskCount: 3,
    hours: 1,
    minutes: 20,
    color: "#2563EB",
  },
];
