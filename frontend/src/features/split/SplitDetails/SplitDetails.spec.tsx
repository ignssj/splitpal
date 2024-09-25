import { act, fireEvent, render, screen } from "@testing-library/react-native";
import SplitDetails from "./";
import useSplitDetailsViewModel from "./ViewModel";
import { renderWithMocks } from "../../../helpers/TestHelper";
import { useRoute } from "@react-navigation/native";

jest.useFakeTimers();
jest.mock("./ViewModel");
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useRoute: jest.fn(),
}));

describe("SplitDetails", () => {
  let openModalMock = jest.fn();

  const mockViewModel = (modalVisible: boolean) => {
    jest.mocked(useRoute).mockReturnValue({
      key: "splitDetails-123",
      name: "SplitDetails",
      params: {
        splitId: "split123",
      },
    });
    jest.mocked(useSplitDetailsViewModel).mockReturnValue({
      state: {
        split: {
          id: "1",
          name: "splitName",
          category: "splitCategory",
          total: 1000,
          qrcode: "1".repeat(36),
          createdAt: new Date().toUTCString(),
          updatedAt: new Date().toUTCString(),
        },
        payments: [
          {
            id: "2",
            receipt: "superserver.com/my-receipt.pdf",
            total: 99,
            split_id: "split123",
            user_id: "af8be746-3f73-414f-8283-64006733dac1",
            created_at: new Date("2023-12-05T00:00:00-0300").toUTCString(),
            updated_at: new Date("2023-12-06T00:00:00-0300").toUTCString(),
          },
        ],
        isFetchingPayments: false,
        modalVisible,
      },
      handlers: {
        openModal: openModalMock,
      },
      setters: {
        setModalVisible: jest.fn(),
      },
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockViewModel(false);
  });

  it("should render a payment list", () => {
    renderWithMocks(<SplitDetails />);

    expect(screen.getByText(/Pagamentos efetuados/)).toBeTruthy();
    expect(screen.queryAllByTestId("PaymentItem")).toHaveLength(1);
  });

  it("should render an add payment button", () => {
    renderWithMocks(<SplitDetails />);

    expect(screen.getByLabelText(/Adicionar pagamento/)).toBeTruthy();
  });

  it("should open modal when add payment button is pressed", async () => {
    renderWithMocks(<SplitDetails />);

    const button = screen.getByLabelText(/Adicionar pagamento/);
    await act(() => {
      fireEvent.press(button);
    });

    expect(openModalMock).toHaveBeenCalledTimes(1);
  });

  it("should render a modal when modalVisible is true", () => {
    mockViewModel(true);
    renderWithMocks(<SplitDetails />);

    expect(screen.queryAllByText(/Adicionar comprovante/)).toHaveLength(1);
  });
});
