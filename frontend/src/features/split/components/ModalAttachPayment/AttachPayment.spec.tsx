import { render, fireEvent, screen } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import React from "react";
import ModalAttachPayment from ".";
import useModalAttachPaymentViewModel from "./ViewModel";

jest.useFakeTimers();
jest.mock("./ViewModel");
describe("ModalAttachPayment", () => {
  let handleAttachMock = jest.fn();
  let handleSaveMock = jest.fn();
  let handleValueChangeMock = jest.fn();
  const mockViewModel = () => {
    jest.clearAllMocks();
    jest.mocked(useModalAttachPaymentViewModel).mockReturnValue({
      state: {
        attachment: undefined,
        isLoading: false,
        paymentValue: {
          masked: "",
          raw: 0,
        },
      },
      handlers: {
        handleAttach: handleAttachMock,
        handleSave: handleSaveMock,
        handleValueChange: handleValueChangeMock,
      },
    });
  };

  beforeEach(() => {
    mockViewModel();
  });

  const renderComponent = (visible = true) => {
    return render(
      <PaperProvider>
        <ModalAttachPayment visible={visible} setVisible={jest.fn()} />
      </PaperProvider>
    );
  };

  it("renders correctly when visible", () => {
    renderComponent();

    expect(screen.getByText(/Adicionar comprovante/)).toBeTruthy();
    expect(screen.getByText(/Clique para anexar/)).toBeTruthy();
  });

  it("calls handleAttach when clicking on the attach chip", () => {
    renderComponent();

    const attachChip = screen.getByText(/Clique para anexar/);
    fireEvent.press(attachChip);

    expect(handleAttachMock).toHaveBeenCalledTimes(1);
  });

  it("disables the save button when no attachment is present or payment value is below 10", () => {
    renderComponent();

    const saveButton = screen.getByText(/Salvar/);

    fireEvent.press(saveButton);
    expect(handleSaveMock).not.toHaveBeenCalled();
  });

  it("enables the save button when an attachment is present and payment value is greater than or equal to 10", () => {
    const mockedFunction = jest.fn();
    jest.mocked(useModalAttachPaymentViewModel).mockReturnValueOnce({
      state: {
        attachment: { name: "receipt.pdf", uri: "file://teste.png" },
        isLoading: false,
        paymentValue: { masked: "12.00", raw: 12 },
      },
      handlers: {
        handleAttach: jest.fn(),
        handleSave: mockedFunction,
        handleValueChange: jest.fn(),
      },
    });

    renderComponent();

    const saveButton = screen.getByText("Salvar");
    fireEvent.press(saveButton);

    expect(mockedFunction).toHaveBeenCalled();
  });

  it("calls handleSave when clicking on the save button", () => {
    const mockHandleSave = jest.fn();
    jest.mocked(useModalAttachPaymentViewModel).mockReturnValueOnce({
      state: {
        attachment: { name: "receipt.pdf", uri: "file://teste.png" },
        isLoading: false,
        paymentValue: { masked: "12.00", raw: 12 },
      },
      handlers: {
        handleAttach: jest.fn(),
        handleSave: mockHandleSave,
        handleValueChange: jest.fn(),
      },
    });

    renderComponent();

    const saveButton = screen.getByText("Salvar");
    fireEvent.press(saveButton);

    expect(mockHandleSave).toHaveBeenCalled();
  });
});
