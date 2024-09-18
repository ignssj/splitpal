import { NavigationContainer } from "@react-navigation/native";
import { render, screen } from "@testing-library/react-native";
import { Provider } from "react-redux";
import Feed from "./";
import useFeedViewModel from "./ViewModel";
import configureStore from "redux-mock-store";

jest.mock("./ViewModel");
describe("Feed", () => {
  const mockStore = configureStore([]);
  const renderComponent = () => {
    jest.mocked(useFeedViewModel).mockReturnValue({
      state: {
        isLoading: false,
        splits: [],
      },
    });

    const initialState = {
      user: {
        id: "mocked-id",
        username: "mocked-username",
        token: "mocked-token",
      },
    };

    const store = mockStore(initialState);

    return render(
      <Provider store={store}>
        <NavigationContainer>
          <Feed />
        </NavigationContainer>
      </Provider>
    );
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
