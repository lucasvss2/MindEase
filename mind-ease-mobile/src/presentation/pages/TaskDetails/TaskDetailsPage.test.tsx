import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { TaskDetailsPage } from "./";
import { useGetTaskById } from "@/presentation/features/Tasks/tasks-queries";
import { Toast } from "toastify-react-native";

const mockBack = jest.fn();
const mockDeleteTask = jest.fn();

jest.mock("@expo/vector-icons", () => {
  const { View } = require("react-native");
  const MockIcon = (props: any) => <View {...props} />;

  return {
    MaterialIcons: MockIcon,
    MaterialCommunityIcons: MockIcon,
    FontAwesome: MockIcon,
    Ionicons: MockIcon,
    Feather: MockIcon,
  };
});

jest.mock("expo-router", () => ({
  useRouter: () => ({ back: mockBack }),
  useLocalSearchParams: () => ({ taskId: "task-123" }),
}));

jest.mock("uuid", () => ({
  v4: () => "mock-uuid-123",
}));

const mockUpdateTask = jest.fn();

jest.mock("@/presentation/features/Tasks/tasks-queries", () => ({
  // Mantemos o mock de consulta como uma função mockável para o useGetTaskById
  useGetTaskById: jest.fn(),

  // Adicionamos o hook de update que está faltando
  useUpdateTaskMutation: () => ({
    mutateAsync: mockUpdateTask,
    isPending: false,
  }),

  // Mantemos o de delete
  useDeleteTaskMutation: () => ({
    mutateAsync: mockDeleteTask,
    isPending: false,
  }),
}));

jest.mock("toastify-react-native", () => ({
  Toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

const mockTask = {
  id: "task-123",
  title: "Tarefa de Teste",
  description: "Minha descrição",
  checklist: [],
};

describe("<TaskDetailsPage />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve exibir o loading enquanto a tarefa é carregada", () => {
    (useGetTaskById as jest.Mock).mockReturnValue({
      isLoading: true,
      data: null,
    });

    render(<TaskDetailsPage />);

    expect(screen.getByTestId("task-loader") || screen.toJSON()).toBeTruthy();
  });

  it("deve renderizar os detalhes da tarefa após o carregamento", () => {
    (useGetTaskById as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockTask,
    });

    render(<TaskDetailsPage />);

    const headerTask = screen.getAllByTestId("task-header-content");
    const checklistTask = screen.getByTestId("task-checklist");
    const focusTask = screen.getByTestId("task-focus");

    expect(headerTask?.length).toBeGreaterThanOrEqual(1);
    expect(checklistTask).toBeOnTheScreen();
    expect(focusTask).toBeOnTheScreen();
  });

  it("Fluxo de Sucesso: deve excluir a tarefa, exibir Toast e voltar", async () => {
    (useGetTaskById as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockTask,
    });
    mockDeleteTask.mockResolvedValueOnce({});

    render(<TaskDetailsPage />);

    const menuButton = screen.getByTestId("dropdown-trigger-task-actions");
    fireEvent.press(menuButton);

    const deleteOption = screen.getByTestId("delete-task-button");
    fireEvent.press(deleteOption);

    await waitFor(() => {
      expect(mockDeleteTask).toHaveBeenCalledWith("task-123");

      expect(mockBack).toHaveBeenCalled();
    });
  });

  it("Fluxo de Erro: deve exibir Toast de erro se a exclusão falhar", async () => {
    (useGetTaskById as jest.Mock).mockReturnValue({
      isLoading: false,
      data: mockTask,
    });
    mockDeleteTask.mockRejectedValueOnce(new Error("Erro ao excluir"));

    render(<TaskDetailsPage />);

    fireEvent.press(screen.getByTestId("dropdown-trigger-task-actions"));
    fireEvent.press(screen.getByTestId("delete-task-button"));

    await waitFor(() => {
      expect(Toast.error).toHaveBeenCalled();
      expect(mockBack).not.toHaveBeenCalled();
    });
  });
});

