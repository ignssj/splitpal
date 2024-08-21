import { ViewStyle } from "react-native";

export interface IScreenRoot {
  children: React.ReactNode;
}
export interface IScreenHeader {
  children: React.ReactNode;
}
export interface IScreenLoading {
  style?: ViewStyle;
}
export interface IScreenContent {
  style?: ViewStyle;
  loading?: boolean;
  children: React.ReactNode;
}
