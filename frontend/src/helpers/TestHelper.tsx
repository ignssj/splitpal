import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { render } from "@testing-library/react-native";

export const MOCKED_REDUX_STATE = {
  user: {
    id: "mocked-id",
    username: "mocked-username",
    token: "mocked-token",
  },
};
const mockStore = configureStore([]);
const store = mockStore(MOCKED_REDUX_STATE);

export const renderWithMocks = (children: ReactNode) => {
  render(
    <Provider store={store}>
      <NavigationContainer>{children}</NavigationContainer>
    </Provider>
  );
};
