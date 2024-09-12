import { fireEvent, render } from "@testing-library/react-native";
import MaskedValue from "./";

jest.useFakeTimers();
describe("MaskedValue", () => {
  it("should mask value correctly", () => {
    const mask = "50050";
    const { getByTestId } = render(<MaskedValue masked={mask} onChangeText={jest.fn()} />);

    const masked = getByTestId("text-input-flat").props.value;
    expect(masked).toEqual("R$500,50");
  });

  it("should call onChangeText when input changes", () => {
    const mockedOnChangeText = jest.fn();
    const { getByTestId } = render(<MaskedValue masked='50050' onChangeText={mockedOnChangeText} />);

    const newInput = "12345";
    fireEvent.changeText(getByTestId("text-input-flat"), newInput);
    expect(mockedOnChangeText).toHaveBeenCalledWith("R$123,45", 123.45);
  });

  it("should use decimal-pad keyboard type", () => {
    const { getByTestId } = render(<MaskedValue masked='50050' onChangeText={jest.fn()} />);
    const keyboardType = getByTestId("text-input-flat").props.keyboardType;
    expect(keyboardType).toEqual("decimal-pad");
  });
});
