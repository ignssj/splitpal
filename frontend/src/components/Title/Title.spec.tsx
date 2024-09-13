import { render } from "@testing-library/react-native";
import Title from ".";

describe("Title", () => {
  it("should render the correct title", () => {
    const title = "Super title";
    const { getByText } = render(<Title>{title}</Title>);

    expect(getByText(title)).toBeDefined();
  });
});
