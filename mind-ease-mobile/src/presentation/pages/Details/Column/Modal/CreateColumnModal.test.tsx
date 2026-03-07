import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { CreateColumnModal } from "./CreateColumnModal";

const mockMutateCreateColumn = jest.fn();
const mockSetVisible = jest.fn();

jest.mock("@/presentation/features/Columns/columns-queries", () => ({
  useCreateColumnMutation: () => ({
    mutateAsync: mockMutateCreateColumn,
  }),
}));

describe("<CreateColumnModal />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Sucesso: deve criar a coluna com o nome correto e fechar o modal", async () => {
    mockMutateCreateColumn.mockResolvedValueOnce({});

    render(
      <CreateColumnModal
        boardId='board-123'
        visible={true}
        setVisible={mockSetVisible}
      />,
    );

    const input = screen.getByTestId("column-name-field");

    fireEvent.changeText(input, "Doing");

    const saveButton = screen.getByTestId("save-change-modal-button");
    fireEvent.press(saveButton);

    await waitFor(() => {
      expect(mockMutateCreateColumn).toHaveBeenCalledWith({
        data: { boardId: "board-123", name: "Doing" },
      });

      expect(mockSetVisible).toHaveBeenCalledWith(false);
    });
  });

  it("Cancelamento: deve limpar o campo e fechar o modal ao cancelar", () => {
    render(
      <CreateColumnModal
        boardId='board-123'
        visible={true}
        setVisible={mockSetVisible}
      />,
    );

    const input = screen.getByTestId("column-name-field");
    fireEvent.changeText(input, "Coluna que será cancelada");

    const cancelButton = screen.getByTestId("modal-cancel-button");
    fireEvent.press(cancelButton);

    expect(mockSetVisible).toHaveBeenCalledWith(false);
  });

  it('deve verificar se o modal está visível', () => {
    render(
      <CreateColumnModal
        boardId='board-1'
        visible={true}
        setVisible={mockSetVisible}
      />,
    );

    const title = screen.getByTestId('create-column-modal');
    expect(title).toBeTruthy();
  });
});

