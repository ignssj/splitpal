import { fireEvent, render } from "@testing-library/react-native";
import Input from "./";

jest.useFakeTimers();
describe("Input", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<Input testID='Input' />);
    expect(getByTestId("Input")).toBeDefined();
  });

  it("should render the correct label", () => {
    const { queryAllByText } = render(<Input label='Super label' />);
    expect(queryAllByText("Super label").length).toBeGreaterThan(1);
  });

  it("should call onChangeText when input changes", () => {
    const mockedOnPress = jest.fn();
    const { getByTestId } = render(<Input testID='Input' onChangeText={mockedOnPress} />);

    const newInput = "new text";
    fireEvent.changeText(getByTestId("Input"), newInput);
    expect(mockedOnPress).toHaveBeenCalledWith(newInput);
  });
});
