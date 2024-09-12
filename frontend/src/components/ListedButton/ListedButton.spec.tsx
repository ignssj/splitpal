import ListedButton from "./";
import { fireEvent, render } from "@testing-library/react-native";
import { Ionicons } from "@expo/vector-icons";

describe("ListedButton", () => {
  it("should render the correct title", () => {
    const { getByText } = render(<ListedButton title='Super title' icon={<></>} onPress={jest.fn()} />);
    expect(getByText("Super title")).toBeDefined();
  });

  it("should call onPress when button is pressed", () => {
    const mockedOnPress = jest.fn();
    const { getByTestId } = render(<ListedButton title='Super title' icon={<></>} onPress={mockedOnPress} />);
    fireEvent.press(getByTestId("ListedButton"));
    expect(mockedOnPress).toHaveBeenCalledTimes(1);
  });
});
