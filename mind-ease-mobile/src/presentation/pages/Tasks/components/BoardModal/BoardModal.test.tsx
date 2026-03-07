import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { BoardModal } from "./";

const mockOnSubmit = jest.fn();
const mockOnCancel = jest.fn();
const mockSetParams = jest.fn();

jest.mock("expo-router", () => ({
  useRouter: () => ({
    setParams: mockSetParams,
  }),
}));

describe("<BoardModal />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Sucesso: deve chamar onSubmit com o nome e cor corretos e fechar o modal", async () => {
    render(
      <BoardModal
        visible={true}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
        snapPoints={[80, 90]}
      />,
    );

    const input = screen.getByTestId("board-name");

    fireEvent.changeText(input, "Meu Novo Projeto");

    const saveButton = screen.getByTestId("save-change-modal-button");
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        name: "Meu Novo Projeto",
        color: expect.any(String),
      });

      expect(mockSetParams).toHaveBeenCalled();

      expect(mockOnCancel).toHaveBeenCalled();
    });
  });

  it("Validação: o botão deve estar desabilitado se o título estiver vazio", () => {
    render(
      <BoardModal
        visible={true}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
      />,
    );

    const saveButton = screen.getByTestId("save-change-modal-button");

    expect(saveButton.props.accessibilityState.disabled).toBe(true);
  });

  it("Cancelamento: deve limpar o estado e chamar onCancel ao cancelar", () => {
    render(
      <BoardModal
        visible={true}
        onCancel={mockOnCancel}
        onSubmit={mockOnSubmit}
        name='Quadro Antigo'
      />,
    );

    const input = screen.getByTestId("board-name");
    fireEvent.changeText(input, "Mudança que não será salva");

    fireEvent.press(screen.getByTestId("modal-cancel-button"));

    expect(mockOnCancel).toHaveBeenCalled();
  });
});

