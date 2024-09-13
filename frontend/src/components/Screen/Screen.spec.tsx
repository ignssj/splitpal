import { render } from "@testing-library/react-native";
import { Screen } from "./";
import { Text, View } from "react-native";
import styles from "./styles";

describe("Screen", () => {
  describe("Root", () => {
    it("should render all children", () => {
      const { getByTestId } = render(
        <Screen.Root>
          <View />
          <View />
        </Screen.Root>
      );

      const children = getByTestId("SafeAreaView").children;
      expect(children.length).toBe(2);
    });

    it("should apply the given style", () => {
      const additionalStyle = { backgroundColor: "red" };
      const { getByTestId } = render(
        <Screen.Root style={additionalStyle}>
          <View />
        </Screen.Root>
      );

      const safeAreaView = getByTestId("SafeAreaView");
      expect(safeAreaView.props.style).toEqual(additionalStyle);
    });

    it("should apply the default style if none is given", () => {
      const { container } = styles;
      const { getByTestId } = render(
        <Screen.Root>
          <View />
        </Screen.Root>
      );

      const safeAreaView = getByTestId("SafeAreaView");
      expect(safeAreaView.props.style).toEqual(container);
    });
  });

  describe("Header", () => {
    it("should render all children", () => {
      const { getByTestId } = render(
        <Screen.Header>
          <View />
          <View />
        </Screen.Header>
      );

      const children = getByTestId("Header").children;
      expect(children.length).toBe(2);
    });
  });

  describe("Content", () => {
    it('should render a Screen.Loading component when "loading" is true', () => {
      const { getByTestId, queryByText } = render(
        <Screen.Content loading>
          <Text>Hey there!</Text>
        </Screen.Content>
      );

      const loading = getByTestId("ActivityIndicator");
      expect(loading).toBeDefined();
      expect(queryByText(/Hey there!/)).toBeNull();
    });

    it("should render all children when loading is false", () => {
      const { getByText } = render(
        <Screen.Content>
          <Text>Hey there!</Text>
        </Screen.Content>
      );

      const children = getByText(/Hey there!/);
      expect(children).toBeDefined();
    });
  });

  describe("Loading", () => {
    it("should apply the given style", () => {
      const additionalStyle = { backgroundColor: "red" };
      const { getByTestId } = render(<Screen.Loading style={additionalStyle} />);

      const loading = getByTestId("ActivityIndicator");
      expect(loading.props.style[1]).toEqual(additionalStyle);
    });

    it("should apply the default style if none is given", () => {
      const { activity } = styles;
      const { getByTestId } = render(<Screen.Loading />);

      const loading = getByTestId("ActivityIndicator");
      expect(loading.props.style[1]).toEqual(activity);
    });
  });
});
