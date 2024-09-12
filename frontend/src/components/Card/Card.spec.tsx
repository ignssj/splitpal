import { render } from "@testing-library/react-native";
import { View } from "react-native";
import Card from "./";

describe("Card", () => {
  it("should render with correct title", () => {
    const { getByText } = render(
      <Card title='Hi there!'>
        <></>
      </Card>
    );
    expect(getByText("Hi there!")).toBeDefined();
  });

  it("should render children correctly", () => {
    const { getByTestId } = render(
      <Card title='Hi there!'>
        <View testID='MyChildren' />
      </Card>
    );
    expect(getByTestId("MyChildren")).toBeDefined();
  });
});
