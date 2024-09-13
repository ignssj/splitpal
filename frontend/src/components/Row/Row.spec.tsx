import { render } from "@testing-library/react-native";
import { View } from "react-native";
import Row from ".";

describe("Row", () => {
  it("should render all children", () => {
    const { getByTestId } = render(
      <Row testID='Row'>
        <View />
      </Row>
    );

    const row = getByTestId("Row");
    expect(row.children).toHaveLength(1);
  });
  it("should render children in a row", () => {
    const { getByTestId } = render(
      <Row testID='Row'>
        <View testID='View1' />
        <View testID='View2' />
      </Row>
    );

    const row = getByTestId("Row");
    expect(row.props.style[0].flexDirection).toEqual("row");
  });
});
