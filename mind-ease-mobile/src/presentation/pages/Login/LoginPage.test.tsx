import {
  render,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react-native";
import { LoginPage } from "./";

jest.setTimeout(85000);

const mockMutateAsync = jest.fn();
const mockReplace = jest.fn();
const mockNavigate = jest.fn();

jest.mock("@/presentation/features/Auth/queries", () => ({
  useSignInMutation: () => ({
    mutateAsync: mockMutateAsync,
    isPending: false,
    data: { user: { email: "teste@teste.com" } },
  }),
}));

jest.mock("expo-router", () => ({
  useRouter: () => ({
    replace: mockReplace,
    navigate: mockNavigate,
  }),
}));

jest.mock("toastify-react-native", () => ({
  Toast: { error: jest.fn() },
}));

describe("<LoginPage />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockMutateAsync.mockResolvedValue({
      accessToken: "fake-token",
      refreshToken: "fake-refresh",
    });
  });

  it("deve habilitar o botão e realizar login com sucesso", async () => {
    render(<LoginPage />);

    const emailInput = screen.getByTestId("email-field");
    const passwordInput = screen.getByTestId("password-field");

    fireEvent.changeText(emailInput, "usuario@mindease.com");
    fireEvent.changeText(passwordInput, "Senha@123");

    fireEvent(emailInput, "blur");
    fireEvent(passwordInput, "blur");

    const submitButton = screen.getByTestId("sign-in-button");

    await waitFor(() => {
      expect(submitButton.props.accessibilityState?.disabled).toBeFalsy();
    });

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalledWith({
        email: "usuario@mindease.com",
        password: "Senha@123",
      });
      expect(mockReplace).toHaveBeenCalledWith("/(private)/menu");
    });
  });

  it("deve navegar para a tela de criar conta ao clicar no link do footer", () => {
    render(<LoginPage />);

    const createAccountButton = screen.getByTestId(
      "create-account-btn-redirect",
    );
    fireEvent.press(createAccountButton);

    expect(mockNavigate).toHaveBeenCalledWith("/(auth)/create-account");
  });

  it("deve exibir erro se a senha estiver incorreta (falha na API)", async () => {
    mockMutateAsync.mockRejectedValueOnce(new Error("Credenciais inválidas"));

    render(<LoginPage />);

    fireEvent.changeText(screen.getByTestId("email-field"), "erro@teste.com");
    fireEvent.changeText(screen.getByTestId("password-field"), "123456");
    fireEvent(screen.getByTestId("password-field"), "blur");

    const submitButton = screen.getByTestId("sign-in-button");

    await waitFor(() => {
      expect(submitButton.props.accessibilityState.disabled).toBeFalsy();
    });

    fireEvent.press(submitButton);

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled();
    });
  });
});

