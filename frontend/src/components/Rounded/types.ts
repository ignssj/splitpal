import { Ionicons } from "@expo/vector-icons";
import { ViewStyle } from "react-native";

export interface IRoundedPreset {
  action?: () => void;
}
export interface IRoundedDefault extends IRoundedPreset {
  icon: keyof typeof Ionicons.glyphMap;
}
