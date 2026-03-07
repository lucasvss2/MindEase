import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { Details } from "./";
import { View as RNView } from "react-native";

import { useGetColumnsByBoardId } from "@/presentation/features/Columns/columns-queries";

import { useColumnStore } from "@/presentation/store/useColumnStore";

const MockView = RNView;

jest.mock("@expo/vector-icons", () => {
  const { View } = require("react-native");
  const MockIcon = (props: any) => <View {...props} />;

  return {
    MaterialIcons: MockIcon,
    MaterialCommunityIcons: MockIcon,
    FontAwesome: MockIcon,
    FontAwesome5: MockIcon,
    Ionicons: MockIcon,
    Feather: MockIcon,
  };
});

jest.mock("expo-router", () => ({
  useRouter: () => ({ back: jest.fn(), push: jest.fn() }),
  useLocalSearchParams: () => ({
    id: "board-1",
    name: "Meu Quadro",
    color: "#ff0000",
  }),
}));

jest.mock("./Column/TasksColumn", () => ({
  TasksColumn: ({ columnName }: { columnName: string }) => (
    <MockView testID={`column-render-${columnName}`} />
  ),
}));

jest.mock("@/presentation/features/Columns/columns-queries", () => ({
  useGetColumnsByBoardId: jest.fn(),
  useCreateColumnMutation: () => ({ mutateAsync: jest.fn(), isPending: false }),
  useUpdateColumnMutation: () => ({ mutateAsync: jest.fn(), isPending: false }),
  useDeleteColumnMutation: () => ({ mutateAsync: jest.fn(), isPending: false }),
}));

jest.mock("@/presentation/features/Boards/board-queries", () => ({
  useUpdateBoardMutation: () => ({ mutateAsync: jest.fn(), isPending: false }),
  useDeleteBoardMutation: () => ({ mutateAsync: jest.fn(), isPending: false }),
}));

jest.mock("@/presentation/store/useColumnStore", () => ({
  useColumnStore: jest.fn(),
}));

const mockColumns = [
  { id: "col-1", name: "A fazer" },
  { id: "col-2", name: "Em progresso" },
];

describe("Tela de Detalhes do Quadro", () => {
  const mockToggleColumn = jest.fn();
  const useColumnStoreMock = useColumnStore as unknown as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve exibir as colunas disponíveis na lista de Checkbox", () => {
    (useGetColumnsByBoardId as jest.Mock).mockReturnValue({
      data: mockColumns,
    });
    useColumnStoreMock.mockReturnValue({
      toggleColumn: mockToggleColumn,
      selectionsByBoard: { "board-1": {} },
    });

    render(<Details />);

    expect(screen.getByText("A fazer")).toBeTruthy();
    expect(screen.getByText("Em progresso")).toBeTruthy();
  });

  it("deve chamar toggleColumn ao clicar em um Checkbox de coluna", () => {
    (useGetColumnsByBoardId as jest.Mock).mockReturnValue({
      data: mockColumns,
    });
    useColumnStoreMock.mockReturnValue({
      toggleColumn: mockToggleColumn,
      selectionsByBoard: { "board-1": {} },
    });

    render(<Details />);

    fireEvent.press(screen.getByText("A fazer"));
    expect(mockToggleColumn).toHaveBeenCalledWith("board-1", "col-1");
  });

  it("deve renderizar APENAS as colunas que estão marcadas como visíveis", () => {
    (useGetColumnsByBoardId as jest.Mock).mockReturnValue({
      data: mockColumns,
    });

    useColumnStoreMock.mockReturnValue({
      toggleColumn: mockToggleColumn,
      selectionsByBoard: {
        "board-1": { "col-1": false, "col-2": true },
      },
    });

    render(<Details />);

    expect(screen.queryByTestId("column-render-Em progresso")).toBeTruthy();
    expect(screen.queryByTestId("column-render-A fazer")).toBeNull();
  });

  it('deve exibir "Nenhuma coluna criada" quando a lista da API for vazia', () => {
    (useGetColumnsByBoardId as jest.Mock).mockReturnValue({ data: [] });
    useColumnStoreMock.mockReturnValue({
      toggleColumn: mockToggleColumn,
      selectionsByBoard: {},
    });

    render(<Details />);

    expect(screen.getByText("Nenhuma coluna criada")).toBeTruthy();
  });
});

