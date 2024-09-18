import { screen, render } from "@testing-library/react-native";
import { GetSplit } from "../../services/splits/types";
import SplitItem from "./Item";
import SplitList from "./List";
import { MOCKED_REDUX_STATE, renderWithMocks } from "../../helpers/TestHelper";

describe("Split", () => {
  const mockedSplit: GetSplit = {
    id: "1",
    category: "Fun",
    name: "My Split",
    total: 1000,
    qrcode: "myqrcode",
    createdAt: new Date("2023-12-05T00:00:00-0300").toUTCString(),
    updatedAt: new Date("2023-12-06T00:00:00-0300").toUTCString(),
    participants: [
      {
        id: "mocked-participation",
        organizer: true,
        userId: MOCKED_REDUX_STATE.user.id,
        splitId: "4321",
        createdAt: new Date("2023-12-05T00:00:00-0300").toUTCString(),
        updatedAt: new Date("2023-12-06T00:00:00-0300").toUTCString(),
      },
    ],
    payments: [],
  };
  describe("Item", () => {
    const renderComponent = (item: GetSplit, title?: string) => {
      render(<SplitItem split={item} title={title} />);
    };

    it("should render all labels", () => {
      renderComponent(mockedSplit);

      expect(screen.getByText("Nome:")).toBeDefined();
      expect(screen.getByText("Categoria:")).toBeDefined();
      expect(screen.getByText("Valor:")).toBeDefined();
    });

    it("should render all values", () => {
      renderComponent(mockedSplit);

      expect(screen.getByText(mockedSplit.name)).toBeDefined();
      expect(screen.getByText(mockedSplit.category)).toBeDefined();
      expect(screen.getByText(/R\$ 1000,00/)).toBeDefined();
    });

    it('should render "Geral" when category is empty', () => {
      renderComponent({ ...mockedSplit, category: "" });

      expect(screen.getByText("Geral")).toBeDefined();
    });

    it("should render title", () => {
      const myTitle = "Super title";
      renderComponent(mockedSplit, myTitle);

      expect(screen.getByText(myTitle)).toBeDefined();
    });
  });

  describe("List", () => {
    const renderComponent = (split?: GetSplit) => {
      const data = split ? [split] : undefined;
      renderWithMocks(<SplitList data={data!} />);
    };

    it("should render a list of splits organized by user", () => {
      renderComponent(mockedSplit);

      expect(screen.queryAllByText(mockedSplit.name)).toHaveLength(1);
      expect(screen.getByText(/Você não possui participações em Splits/)).toBeDefined();
    });
    it("should render a list of splits user is participating", () => {
      renderComponent({ ...mockedSplit, participants: [{ ...mockedSplit.participants[0], organizer: false }] });

      expect(screen.queryAllByText(mockedSplit.name)).toHaveLength(1);
      expect(screen.getByText(/Você não organizou nenhum Split/)).toBeDefined();
    });

    it("should render a loading screen when data is empty", () => {
      renderComponent();

      expect(screen.getByTestId("SplitLoading")).toBeDefined();
    });
  });
});
