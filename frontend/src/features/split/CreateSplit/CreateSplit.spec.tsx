import { act, fireEvent, render, screen } from "@testing-library/react-native";
import CreateSplit from "./";
import useCreateSplitViewModel from "./ViewModel";
import { renderWithMocks } from "../../../helpers/TestHelper";

jest.useFakeTimers();
jest.mock("./ViewModel");
describe("CreateSplit", () => {
  let handleCreateMock = jest.fn();
  let setModalVisibleMock = jest.fn();

  const mockViewModel = (state: { initialSplitValue: any; modalVisible: boolean }) => {
    jest.clearAllMocks();
    jest.mocked(useCreateSplitViewModel).mockReturnValue({
      state,
      handlers: {
        handleCreate: handleCreateMock,
        setModalVisible: setModalVisibleMock,
      },
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockViewModel({
      initialSplitValue: {
        name: "supername",
        category: "supercategory",
        total: "R$ 1.000,00",
        qrcode: "1".repeat(36),
      },
      modalVisible: false,
    });
  });

  it("should render an input form", () => {
    renderWithMocks(<CreateSplit />);

    expect(screen.queryAllByText(/Nome/)).toHaveLength(2);
    expect(screen.queryAllByText(/Categoria/)).toHaveLength(2);
    expect(screen.queryAllByText(/QR Code/)).toHaveLength(2);
    expect(screen.getByText(/Criar/)).toBeTruthy();
  });

  it("should call handleCreate when a valid form is submitted", async () => {
    renderWithMocks(<CreateSplit />);

    const button = screen.getByText(/Criar/);

    await act(() => {
      fireEvent.press(button);
    });
    expect(handleCreateMock).toHaveBeenCalledTimes(1);
  });

  it("should not call handleCreate when an invalid form is submitted", async () => {
    mockViewModel({
      initialSplitValue: {
        name: "",
        category: "",
        total: "",
        qrcode: "",
      },
      modalVisible: false,
    });
    renderWithMocks(<CreateSplit />);

    const button = screen.getByText(/Criar/);

    await act(() => {
      fireEvent.press(button);
    });
    expect(handleCreateMock).not.toHaveBeenCalled();
  });

  it("should render a join payment button", () => {
    renderWithMocks(<CreateSplit />);

    expect(screen.getByText(/Quero ingressar em um pagamento/)).toBeTruthy();
  });

  it("should call setModalVisible when join payment button is pressed", async () => {
    renderWithMocks(<CreateSplit />);

    const button = screen.getByText(/Quero ingressar em um pagamento/);
    await act(() => {
      fireEvent.press(button);
    });

    expect(setModalVisibleMock).toHaveBeenCalledTimes(1);
  });

  it("should render a join payment modal", async () => {
    mockViewModel({
      initialSplitValue: {
        name: "",
        category: "",
        total: "",
        qrcode: "",
      },
      modalVisible: true,
    });

    renderWithMocks(<CreateSplit />);

    expect(screen.getByText(/Insira o ID do pagamento no qual deseja ingressar/)).toBeTruthy();
  });
});
