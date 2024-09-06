import React from "react";
import Routes from "./src/infra/navigation/stack";
import { PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./src/infra/theme";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import {
  useFonts,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
} from "@expo-google-fonts/outfit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { toastConfig } from "./src/components/ToastFeedback";
import "react-native-reanimated";
import "react-native-gesture-handler";

const App = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const queryClient = new QueryClient();

  const [fontsLoaded] = useFonts({
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes />
          <Toast config={toastConfig} />
        </QueryClientProvider>
      </Provider>
    </PaperProvider>
  );
};

export default App;
