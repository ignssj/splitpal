import { fireEvent, render } from "@testing-library/react-native";
import { FAB } from "./";

describe("FAB", () => {
  describe("New", () => {
    it("should render when visible is true", () => {
      const { getByTestId } = render(<FAB.New label='Super label' onPress={jest.fn()} visible />);

      expect(getByTestId("FabNew")).toBeDefined();
    });

    it("should not render when visible is false", () => {
      const { queryByTestId } = render(<FAB.New label='Super label' onPress={jest.fn()} visible={false} />);

      expect(queryByTestId("FabNew")).toBeNull();
    });

    it("should render the correct title", () => {
      const { getByText } = render(<FAB.New label='Super label' onPress={jest.fn()} visible />);

      expect(getByText("Super label")).toBeDefined();
    });

    it("should call onPress when fab is pressed", () => {
      const mockedOnPress = jest.fn();
      const { getByTestId } = render(<FAB.New label='Super label' onPress={mockedOnPress} visible />);

      fireEvent.press(getByTestId("FabNew"));
      expect(mockedOnPress).toHaveBeenCalledTimes(1);
    });
  });
});
