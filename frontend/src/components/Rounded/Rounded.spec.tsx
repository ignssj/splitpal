import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Rounded } from "./";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native");
describe("Rounded", () => {
  describe("Default", () => {
    const mockAction = jest.fn();
    const mockIcon = "add";

    it("renders correctly with given icon", () => {
      const { getByTestId } = render(<Rounded.Default icon={mockIcon} action={mockAction} />);
      const touchable = getByTestId("RoundedDefault");
      const icon = touchable.findByType(Ionicons);

      expect(touchable).toBeTruthy();
      expect(icon.props.name).toBe(mockIcon);
    });

    it("calls the action when pressed", () => {
      const { getByTestId } = render(<Rounded.Default icon={mockIcon} action={mockAction} />);
      const touchable = getByTestId("RoundedDefault");

      fireEvent.press(touchable);
      expect(mockAction).toHaveBeenCalled();
    });
  });

  describe("Back", () => {
    const goBackMock = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({ goBack: goBackMock });

    it("should render correctly", () => {
      const { getByTestId } = render(<Rounded.Back />);
      expect(getByTestId("RoundedDefault")).toBeTruthy();
    });

    it("should render a back icon", () => {
      const { getByTestId } = render(<Rounded.Back />);
      const touchable = getByTestId("RoundedDefault");
      const icon = touchable.findByType(Ionicons);

      expect(icon.props.name).toBe("chevron-back");
    });

    it("should call navigation.goBack when action is triggered", () => {
      const goBackMock = jest.fn();
      (useNavigation as jest.Mock).mockReturnValue({ goBack: goBackMock });

      const { getByTestId } = render(<Rounded.Back />);
      const roundedDefault = getByTestId("RoundedDefault");

      fireEvent.press(roundedDefault);
      expect(goBackMock).toHaveBeenCalled();
    });
  });
});
