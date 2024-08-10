import React from "react";
import Routes from "./src/infra/navigation/stack";
import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./src/infra/theme";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </PaperProvider>
  );
};

export default App;
