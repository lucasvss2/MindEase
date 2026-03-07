import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { TaskModal } from "./";
import { FormProvider, useForm } from "react-hook-form";
import { Toast } from "toastify-react-native";

const mockCreateTask = jest.fn();
const mockOnCancel = jest.fn();

jest.mock("uuid", () => ({
  v4: () => "mock-uuid-123",
}));

jest.mock("react-native-get-random-values", () => ({}));

jest.mock("@/presentation/features/Tasks/tasks-queries", () => ({
  useCreateTaskMutation: () => ({
    mutateAsync: mockCreateTask,
    isPending: false,
  }),
}));

jest.mock("toastify-react-native", () => ({
  Toast: { error: jest.fn() },
}));

const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: { title: "", description: "", checklist: [] },
  });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

describe("TaskModal - Comportamento de Criação", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Sucesso: deve criar a tarefa e FECHAR o modal", async () => {
    mockCreateTask.mockResolvedValueOnce({});

    render(
      <FormWrapper>
        <TaskModal
          visible={true}
          onCancelAction={mockOnCancel}
          boardId='board-1'
          columnId='col-1'
          snapPoints={[70, 90]}
        />
      </FormWrapper>,
    );

    fireEvent.changeText(screen.getByTestId("task-title-field"), "Nova Tarefa");

    fireEvent.press(screen.getByTestId("create-task-button"));

    await waitFor(() => {
      expect(mockCreateTask).toHaveBeenCalled();
      expect(mockOnCancel).toHaveBeenCalled();
    });
  });

  it("Falha: deve exibir TOAST e MANTER o modal aberto", async () => {
    mockCreateTask.mockRejectedValueOnce(new Error("Erro no servidor"));

    render(
      <FormWrapper>
        <TaskModal
          visible={true}
          onCancelAction={mockOnCancel}
          boardId='board-1'
          columnId='col-1'
          snapPoints={[70, 90]}
        />
      </FormWrapper>,
    );

    fireEvent.changeText(
      screen.getByTestId("task-title-field"),
      "Tarefa com Erro",
    );
    fireEvent.press(screen.getByTestId("create-task-button"));

    await waitFor(() => {
      expect(Toast.error).toHaveBeenCalled();

      expect(mockOnCancel).not.toHaveBeenCalled();
    });
  });
});

