import MyData from "./";
import useMyDataViewModel from "./ViewModel";
import { render, fireEvent, act, screen } from "@testing-library/react-native";

jest.useFakeTimers();
jest.mock("./ViewModel");

describe("MyData Screen", () => {
  const updateMock = jest.fn();
  const renderComponent = (
    initialValues = {
      newEmail: "johndoe@test.com",
      currentPassword: "superpass",
      newPassword: "superpass",
    }
  ) => {
    jest.mocked(useMyDataViewModel).mockReturnValue({
      state: {
        initialValues,
      },
      handlers: {
        handleUpdate: updateMock,
      },
    });

    return render(<MyData />);
  };

  beforeEach(() => {
    updateMock.mockClear();
  });

  it("should render the form inputs and update button", () => {
    renderComponent();

    expect(screen.getByTestId("Email")).toBeTruthy();
    expect(screen.getByTestId("Pass1")).toBeTruthy();
    expect(screen.getByTestId("Pass2")).toBeTruthy();
    expect(screen.getByText("Atualizar dados")).toBeTruthy();
  });

  it("should call handleUpdate when the form is valid and button is pressed", async () => {
    renderComponent();

    const updateButton = screen.getByText("Atualizar dados");

    await act(async () => {
      fireEvent.press(updateButton);
    });

    expect(updateMock).toHaveBeenCalledWith({
      newEmail: "johndoe@test.com",
      currentPassword: "superpass",
      newPassword: "superpass",
    });
  });

  it("should not call handleUpdate when the form is invalid", async () => {
    renderComponent({
      newEmail: "",
      currentPassword: "",
      newPassword: "",
    });

    const updateButton = screen.getByText("Atualizar dados");

    await act(async () => {
      fireEvent.press(updateButton);
    });

    expect(updateMock).not.toHaveBeenCalled();
  });
});
