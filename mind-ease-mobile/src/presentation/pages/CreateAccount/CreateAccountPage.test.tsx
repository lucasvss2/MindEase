import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { CreateAccountPage } from "./";

const mockMutateAsync = jest.fn();
const mockReplace = jest.fn();

jest.mock("@/presentation/features/Auth/queries", () => ({
  useCreateAccountMutation: () => ({
    mutateAsync: mockMutateAsync,
    isPending: false,
  }),
}));

jest.mock("toastify-react-native", () => ({
  Toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({
    replace: mockReplace,
  }),
}));

describe("<CreateAccountPage />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockMutateAsync.mockResolvedValue({});
  });

  it("deve habilitar o botão quando todos os campos estiverem válidos", async () => {
    render(<CreateAccountPage />);

    const nameInput = screen.getByTestId("name-field");
    const emailInput = screen.getByTestId("email-field");
    const passwordInput = screen.getByTestId("password-field");

    fireEvent.changeText(nameInput, "Usuario Teste");
    fireEvent.changeText(emailInput, "teste@exemplo.com");
    fireEvent.changeText(passwordInput, "Senha@123456");

    fireEvent(nameInput, "blur");
    fireEvent(emailInput, "blur");
    fireEvent(passwordInput, "blur");

    const button = screen.getByTestId("create-account");

    await waitFor(
      () => {
        expect(button.props.accessibilityState.disabled).toBeFalsy();
      },
      { timeout: 3000 },
    );

    // 4. Clica
    fireEvent.press(button);

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled();
    });
  });

  it("deve lidar com erro na criação de conta", async () => {
    mockMutateAsync.mockRejectedValueOnce(new Error("Email já existe"));

    render(<CreateAccountPage />);

    fireEvent.changeText(screen.getByTestId("name-field"), "João Silva");
    fireEvent.changeText(screen.getByTestId("email-field"), "joao@email.com");
    fireEvent.changeText(screen.getByTestId("password-field"), "Senha@123");

    fireEvent.press(screen.getByTestId("create-account"));

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled();
    });
  });
});

