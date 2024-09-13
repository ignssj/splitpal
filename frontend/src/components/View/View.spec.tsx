import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import useThemedStyles from "../../hooks/useThemedStyles";
import View from ".";

jest.mock("../../hooks/useThemedStyles");
describe("View Component", () => {
  beforeEach(() => {
    (useThemedStyles as jest.Mock).mockReturnValue({
      root: { padding: 10 },
    });
  });

  it("renders correctly with children", () => {
    const { getByText } = render(
      <View>
        <Text>Test Child</Text>
      </View>
    );

    expect(getByText("Test Child")).toBeTruthy();
  });

  it("applies custom styles", () => {
    const customStyle = { margin: 20 };
    const { getByTestId } = render(
      <View style={customStyle} testID='custom-view'>
        <Text>Test Child</Text>
      </View>
    );

    const view = getByTestId("custom-view");
    expect(view.props.style).toContainEqual(customStyle);
  });

  it("applies themed styles", () => {
    const { getByTestId } = render(
      <View testID='themed-view'>
        <Text>Test Child</Text>
      </View>
    );

    const view = getByTestId("themed-view");
    expect(view.props.style).toContainEqual({ padding: 10 });
  });
});
