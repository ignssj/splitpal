import { ViewStyle } from "react-native";

export interface IScreenRoot {
  children: React.ReactNode;
}
export interface IScreenHeader {
  children: React.ReactNode;
}

export interface IScreenContent {
  flex: number;
  children: React.ReactNode;
}
