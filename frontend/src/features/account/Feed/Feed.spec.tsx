import { screen } from "@testing-library/react-native";
import { renderWithMocks } from "../../../helpers/TestHelper";
import Feed from "./";
import useFeedViewModel from "./ViewModel";

jest.mock("./ViewModel");
describe("Feed", () => {
  const renderComponent = () => {
    jest.mocked(useFeedViewModel).mockReturnValue({
      state: {
        isLoading: false,
        splits: [],
      },
    });
    return renderWithMocks(<Feed />);
  };

  it("should render a list of splits", () => {
    renderComponent();
    const list = screen.getByTestId("OrganizingList");
    expect(list).toBeDefined();
  });

  it("should render the screen title", () => {
    renderComponent();
    const title = screen.getByText("Feed");
    expect(title).toBeDefined();
  });
});
