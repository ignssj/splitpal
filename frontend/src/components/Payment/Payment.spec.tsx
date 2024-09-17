import { screen, render, fireEvent } from "@testing-library/react-native";
import { Payment } from "../../services/payments/types";
import { Linking } from "react-native";
import PaymentItem from "./Item";
import PaymentList from "./List";

describe("Payment", () => {
  const mockedPayment: Payment = {
    id: "12345",
    receipt: "superserver.com/my-receipt.pdf",
    total: 99,
    split_id: "split123",
    user_id: "af8be746-3f73-414f-8283-64006733dac1",
    created_at: new Date("2023-12-05T00:00:00-0300").toUTCString(),
    updated_at: new Date("2023-12-06T00:00:00-0300").toUTCString(),
  };

  describe("Item", () => {
    const renderComponent = () => render(<PaymentItem {...mockedPayment} />);
    it("should render all labels", () => {
      renderComponent();

      expect(screen.getByText(/Usuário/)).toBeDefined();
      expect(screen.getByText(/Valor/)).toBeDefined();
      expect(screen.getByText(/Data/)).toBeDefined();
    });

    it("should render all values", () => {
      renderComponent();

      expect(screen.getByText(mockedPayment.user_id.substring(24))).toBeDefined();
      expect(screen.getByText("R$ 99,00")).toBeDefined();
      expect(screen.getByText(/05\/12\/2023/)).toBeDefined();
    });

    it("should render a receipt button", () => {
      renderComponent();

      expect(screen.getByText(/Comprovante/)).toBeDefined();
      expect(screen.getByText(/Acessar link/)).toBeDefined();
    });

    it("should call Linking.openURL when Acessar Link is pressed", () => {
      jest.spyOn(Linking, "openURL").mockReturnValueOnce(Promise.resolve());
      renderComponent();

      const button = screen.getByText(/Acessar link/);
      fireEvent.press(button);

      expect(Linking.openURL).toHaveBeenCalledWith(mockedPayment.receipt);
    });
  });

  describe("List", () => {
    const renderComponent = (isLoading: boolean) => render(<PaymentList data={[mockedPayment]} loading={isLoading} />);

    it("should render a list of payments", () => {
      renderComponent(false);

      expect(screen.getAllByTestId("PaymentItem").length).toBe(1);
    });

    it("should render a loading screen when is loading", () => {
      renderComponent(true);

      expect(screen.getByTestId("ScreenLoading")).toBeDefined();
    });
  });
});
