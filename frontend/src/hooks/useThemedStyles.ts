import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";
import { MD3Theme } from "react-native-paper";

type StyleCallback<T> = (theme: MD3Theme) => T;

const useThemedStyles = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  styles: StyleCallback<T>
): T => {
  const theme = useTheme();
  return styles(theme);
};

export default useThemedStyles;
