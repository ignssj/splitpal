import { render } from "@testing-library/react-native";
import Spaced from ".";
import { View } from "react-native";

describe("Spaced", () => {
  it("should render all children", () => {
    const { getByTestId } = render(
      <Spaced gap={10}>
        <View />
        <View />
      </Spaced>
    );

    const spaced = getByTestId("Spaced");
    expect(spaced.children).toHaveLength(2);
  });

  it("should apply the given gap", () => {
    const { getByTestId } = render(
      <Spaced gap={10}>
        <View />
        <View />
      </Spaced>
    );

    const spaced = getByTestId("Spaced");
    expect(spaced.props.style.gap).toEqual(10);
  });
});
