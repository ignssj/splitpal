import { fireEvent, render } from "@testing-library/react-native";
import MaskedValue from "./";

jest.useFakeTimers();
describe("MaskedValue", () => {
  it("should mask value correctly", () => {
    const mask = "50050";
    const { getAllByDisplayValue } = render(<MaskedValue masked={mask} onChangeText={jest.fn()} />);

    const masked = getAllByDisplayValue("R$500,50");
    expect(masked).toBeDefined();
  });

  it("should call onChangeText when input changes", () => {
    const mockedOnChangeText = jest.fn();
    const { getByDisplayValue } = render(<MaskedValue masked='50050' onChangeText={mockedOnChangeText} />);

    const newInput = "12345";
    fireEvent.changeText(getByDisplayValue("R$500,50"), newInput);
    expect(mockedOnChangeText).toHaveBeenCalledWith("R$123,45", 123.45);
  });

  it("should use decimal-pad keyboard type", () => {
    const { getByDisplayValue } = render(<MaskedValue masked='50050' onChangeText={jest.fn()} />);
    const keyboardType = getByDisplayValue("R$500,50").props.keyboardType;
    expect(keyboardType).toEqual("decimal-pad");
  });
});
