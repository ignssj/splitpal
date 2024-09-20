import { act, fireEvent, render, screen } from "@testing-library/react-native";
import RegisterScreen from ".";
import useRegisterViewModel from "./ViewModel";

jest.useFakeTimers();
jest.mock("./ViewModel");
describe("Register", () => {
  let handleSignupMock = jest.fn();
  let handleNavigation = jest.fn();

  const mockViewModel = (signupInitialValue: { username: string; password: string; confirmation: string }) => {
    jest.clearAllMocks();
    jest.mocked(useRegisterViewModel).mockReturnValue({
      signupInitialValue,
      state: {
        hide: false,
      },
      handlers: {
        handleSignup: handleSignupMock,
        togglePasswordVisibility: jest.fn(),
        navigateToLogin: handleNavigation,
      },
    });
  };

  beforeEach(() => {
    mockViewModel({ username: "", password: "", confirmation: "" });
  });

  it("should render a UserInput", () => {
    render(<RegisterScreen />);

    const userInput = screen.getByTestId("UserRoot");
    expect(userInput).toBeDefined();
  });

  it('should call "handleSignup" when input form is valid', async () => {
    mockViewModel({ username: "johndoe", password: "fakepassword", confirmation: "fakepassword" });
    render(<RegisterScreen />);

    const button = screen.getByText("Cadastrar");
    await act(() => {
      fireEvent.press(button);
    });
    expect(handleSignupMock).toHaveBeenCalled();
  });

  it('should not call "handleSignup" when input form is invalid', async () => {
    render(<RegisterScreen />);

    const button = screen.getByText("Cadastrar");
    await act(() => {
      fireEvent.press(button);
    });
    expect(handleSignupMock).not.toHaveBeenCalled();
  });

  it('should call "navigateToLogin" when the button is pressed', () => {
    render(<RegisterScreen />);

    const button = screen.getByText(/Já tem uma conta\? Faça login/);

    fireEvent.press(button);
    expect(handleNavigation).toHaveBeenCalled();
  });
});
