import { fireEvent, render } from "@testing-library/react-native";
import FormError from "./";

describe("FormError", () => {
  it("should render the correct message", () => {
    const myMessage = "Super error message";
    const { getByText } = render(<FormError>{myMessage}</FormError>);

    expect(getByText(myMessage)).toBeDefined();
  });
});
