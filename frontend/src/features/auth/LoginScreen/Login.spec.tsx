import { screen, render, fireEvent, act } from "@testing-library/react-native";
import LoginScreen from "./";
import useLoginViewModel from "./ViewModel";

jest.useFakeTimers();
jest.mock("./ViewModel");
describe("Login", () => {
  let handleLoginMock = jest.fn();
  let handleNavigationMock = jest.fn();
  jest.mocked(useLoginViewModel).mockReturnValue({
    state: {
      loginInitialValue: {
        username: "johndoe",
        password: "fakepassword",
      },
      hidePassword: false,
    },
    handlers: {
      handleLogin: handleLoginMock,
      togglePasswordVisibility: jest.fn(),
      navigateToRegister: handleNavigationMock,
    },
  });

  const renderComponent = (initialState: { username: string; password: string }) => {
    const handleLoginMock = jest.fn();
    const handleNavigationMock = jest.fn();
    jest.mocked(useLoginViewModel).mockReturnValue({
      state: {
        loginInitialValue: {
          username: "johndoe",
          password: "fakepassword",
        },
        hidePassword: false,
      },
      handlers: {
        handleLogin: handleLoginMock,
        togglePasswordVisibility: jest.fn(),
        navigateToRegister: handleNavigationMock,
      },
    });

    return render(<LoginScreen />);
  };

  it("should render a UserInput", () => {
    render(<LoginScreen />);

    const userInput = screen.getByTestId("UserRoot");
    expect(userInput).toBeDefined();
  });

  it('should call "handleLogin" when the button is pressed', async () => {
    render(<LoginScreen />);

    const button = screen.getByText("Entrar");

    await act(async () => {
      fireEvent.press(button);
    });
    expect(handleLoginMock).toHaveBeenCalled();
  });

  it('should call "navigateToRegister" when the button is pressed', () => {
    render(<LoginScreen />);

    const button = screen.getByText("Não tem uma conta? Cadastre-se");

    fireEvent.press(button);
    expect(handleNavigationMock).toHaveBeenCalled();
  });

  it("should disable login button when form is invalid", async () => {
    const handleLoginMock = jest.fn();
    jest.mocked(useLoginViewModel).mockReturnValue({
      state: {
        loginInitialValue: {
          username: "",
          password: "",
        },
        hidePassword: false,
      },
      handlers: {
        handleLogin: handleLoginMock,
        togglePasswordVisibility: jest.fn(),
        navigateToRegister: jest.fn(),
      },
    });
    render(<LoginScreen />);

    const button = screen.getByText("Entrar");
    await act(() => {
      fireEvent.press(button);
    });

    expect(handleLoginMock).not.toHaveBeenCalled();
  });
});
