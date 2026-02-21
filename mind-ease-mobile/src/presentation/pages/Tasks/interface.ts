/**
 * Parâmetros da rota de tarefa (create-task).
 * Sem id = vertente criação; com id = vertente detalhe/edição.
 */
export interface ITasksParams {
  /** ID da tarefa (vertente detalhe) */
  id?: string;
  /** ID do quadro (opcional) */
  boardId?: string;
  /** Título do quadro (navegação) */
  boardTitle?: string;
  /** Cor do quadro (navegação) */
  boardColor?: string;
}

/**
 * Vertentes da tela: formulário (criação) ou detalhe (edição/visualização).
 */
export type TasksVariant = "form" | "detail";

/** Títulos do header por vertente */
export const TASKS_HEADER_TITLES: Record<TasksVariant, string> = {
  form: "Criar nova tarefa",
  detail: "Detalhes da tarefa",
};
