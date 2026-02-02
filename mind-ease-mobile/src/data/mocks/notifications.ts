export interface INotification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read?: boolean;
}

/** Dados mockados de notificações para desenvolvimento e protótipos. */
export const MOCK_NOTIFICATIONS: INotification[] = [
  {
    id: "1",
    title: "Timer concluído",
    message: "Seu tempo de foco de 2 minutos foi concluído.",
    timestamp: new Date(Date.now() - 5 * 60000),
    read: false,
  },
  {
    id: "2",
    title: "Nova tarefa",
    message: "Você tem uma nova tarefa para revisar.",
    timestamp: new Date(Date.now() - 2 * 3600000),
    read: false,
  },
  {
    id: "3",
    title: "Lembrete",
    message: "Não se esqueça de fazer uma pausa.",
    timestamp: new Date(Date.now() - 24 * 3600000),
    read: true,
  },
];
