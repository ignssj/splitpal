import { ViewStyle } from "react-native";

export interface ICard {
  children: React.ReactNode;
  title?: string;
  style?: ViewStyle;
}
