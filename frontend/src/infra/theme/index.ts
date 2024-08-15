import { MD3LightTheme, MD3DarkTheme, configureFonts } from "react-native-paper";

const fontConfig = {
  fontFamily: "Outfit_400Regular",
  fontSize: 15,
};

const lightTheme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3LightTheme.colors,
    primary: "#006FDB",
    onPrimary: "#FFFFFF", // cor de texto ou ícones em cima da cor primária
    primaryContainer: "#E6F2FF", // container para realçar a cor primária

    secondary: "#0047A5",
    onSecondary: "#FFFFFF", // cor de texto ou ícones em cima da cor secundária
    secondaryContainer: "#E6F2FF", // container para realçar a cor secundária

    tertiary: "#4D94FF",
    onTertiary: "#FFFFFF", // cor de texto ou ícones em cima da cor terciária
    tertiaryContainer: "#E6F2FF", // container para realçar a cor terciária

    background: "#E6F2FF",
    onBackground: "#001A33", // cor de texto ou ícones em cima do fundo

    surface: "#FFFFFF",
    onSurface: "#001A33", // cor de texto ou ícones em cima da superfície

    surfaceVariant: "#F0F8FF",
    onSurfaceVariant: "#001A33",

    error: "#B00020",
    onError: "#FFFFFF",
    errorContainer: "#FCD0D4",

    outline: "#737373",
    outlineVariant: "#B3B3B3",

    shadow: "#000000",
    surfaceDisabled: "rgba(0, 0, 0, 0.12)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

const darkTheme = {
  ...MD3DarkTheme,
  fonts: configureFonts({ config: fontConfig }),
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#4D94FF",
    onPrimary: "#001A33",
    primaryContainer: "#0056D2",

    secondary: "#66B2FF",
    onSecondary: "#001A33",
    secondaryContainer: "#0047A5",

    tertiary: "#007BFF",
    onTertiary: "#001A33",
    tertiaryContainer: "#0056D2",

    background: "#001A33",
    onBackground: "#E6F2FF",

    surface: "#001A33",
    onSurface: "#E6F2FF",

    surfaceVariant: "#001F3F",
    onSurfaceVariant: "#F0F8FF",

    error: "#CF6679",
    onError: "#B00020",
    errorContainer: "#8A1C1C",

    outline: "#8A8A8A",
    outlineVariant: "#B3B3B3",

    shadow: "#000000",
    surfaceDisabled: "rgba(255, 255, 255, 0.12)",
    backdrop: "rgba(0, 0, 0, 0.5)",
  },
};

export { lightTheme, darkTheme };
