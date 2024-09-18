import { Text } from "react-native";
import { UserInput } from ".";
import { screen, render, fireEvent } from "@testing-library/react-native";

jest.useFakeTimers();
describe("UserInput", () => {
  describe("Root", () => {
    it("should render children", () => {
      render(
        <UserInput.Root>
          <Text>Child 1</Text>
          <Text>Child 2</Text>
        </UserInput.Root>
      );

      expect(screen.getByText(/Child 1/)).toBeDefined();
      expect(screen.getByText(/Child 2/)).toBeDefined();
    });
  });
  describe("Email", () => {
    it("should render value", () => {
      const email = "my_email@test.com";
      render(<UserInput.Email value={email} onChange={jest.fn()} />);
      expect(screen.getByDisplayValue(email)).toBeDefined();
    });

    it("should call onChange", () => {
      const mockedOnChange = jest.fn();
      render(<UserInput.Email value='current_value' onChange={mockedOnChange} />);

      const input = screen.getByDisplayValue("current_value");
      fireEvent.changeText(input, "new_value");

      expect(mockedOnChange).toHaveBeenCalledWith("new_value");
    });

    it('should render label "Email"', () => {
      render(<UserInput.Email value='' onChange={jest.fn()} />);
      expect(screen.queryAllByText("Email")).toHaveLength(2);
    });
  });

  describe("Password", () => {
    it("should render value", () => {
      const password = "my_password";
      render(<UserInput.Password value={password} onChange={jest.fn()} visible toggleVisibility={jest.fn()} />);
      expect(screen.getByDisplayValue(password)).toBeDefined();
    });

    it("should show value", () => {
      render(<UserInput.Password value='my_password' onChange={jest.fn()} visible toggleVisibility={jest.fn()} />);
      const passwordInput = screen.getByDisplayValue("my_password");
      expect(passwordInput.props.secureTextEntry).toBeFalsy();
    });

    it("should hide value", () => {
      render(<UserInput.Password value='my_password' onChange={jest.fn()} visible={false} toggleVisibility={jest.fn()} />);
      const passwordInput = screen.getByDisplayValue("my_password");
      expect(passwordInput.props.secureTextEntry).toBeTruthy();
    });

    it("should call toggleVisibility", () => {
      const mockedToggleVisibility = jest.fn();
      render(<UserInput.Password value='my_password' onChange={jest.fn()} visible toggleVisibility={mockedToggleVisibility} />);

      const button = screen.getByTestId("VisibilityButton");
      fireEvent.press(button);
      expect(mockedToggleVisibility).toHaveBeenCalled();
    });

    it("should call onChange", () => {
      const mockedOnChange = jest.fn();
      render(<UserInput.Password value='current_value' onChange={mockedOnChange} visible toggleVisibility={jest.fn()} />);

      const input = screen.getByDisplayValue("current_value");
      fireEvent.changeText(input, "new_value");

      expect(mockedOnChange).toHaveBeenCalledWith("new_value");
    });

    it('should render label "Senha"', () => {
      render(<UserInput.Password value='current_value' onChange={jest.fn()} visible toggleVisibility={jest.fn()} />);
      expect(screen.queryAllByText("Senha")).toHaveLength(2);
    });
  });
  describe("Confirmation", () => {
    it("should render value", () => {
      const password = "my_password";
      render(<UserInput.Confirmation value={password} onChange={jest.fn()} visible toggleVisibility={jest.fn()} />);
      expect(screen.getByDisplayValue(password)).toBeDefined();
    });

    it("should show value", () => {
      render(<UserInput.Confirmation value='my_confirmation' onChange={jest.fn()} visible toggleVisibility={jest.fn()} />);
      const passwordInput = screen.getByDisplayValue("my_confirmation");
      expect(passwordInput.props.secureTextEntry).toBeFalsy();
    });

    it("should hide value", () => {
      render(<UserInput.Confirmation value='my_confirmation' onChange={jest.fn()} visible={false} toggleVisibility={jest.fn()} />);
      const confirmationInput = screen.getByDisplayValue("my_confirmation");
      expect(confirmationInput.props.secureTextEntry).toBeTruthy();
    });

    it("should call toggleVisibility", () => {
      const mockedToggleVisibility = jest.fn();
      render(<UserInput.Confirmation value='' onChange={jest.fn()} visible toggleVisibility={mockedToggleVisibility} />);

      const button = screen.getByTestId("VisibilityButton");
      fireEvent.press(button);
      expect(mockedToggleVisibility).toHaveBeenCalled();
    });

    it("should call onChange", () => {
      const mockedOnChange = jest.fn();
      render(<UserInput.Confirmation value='current_value' onChange={mockedOnChange} visible toggleVisibility={jest.fn()} />);

      const input = screen.getByDisplayValue("current_value");
      fireEvent.changeText(input, "new_value");

      expect(mockedOnChange).toHaveBeenCalledWith("new_value");
    });

    it('should render label "Confirme a senha"', () => {
      render(<UserInput.Confirmation value='current_value' onChange={jest.fn()} visible toggleVisibility={jest.fn()} />);
      expect(screen.queryAllByText("Confirme a senha")).toHaveLength(2);
    });
  });
});
