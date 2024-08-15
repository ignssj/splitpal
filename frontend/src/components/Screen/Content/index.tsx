import React from "react";
import { View } from "react-native";
import { IScreenContent } from "../types";

const ScreenContent: React.FC<IScreenContent> = ({ flex, children }) => {
  return <View style={{ flex }}>{children}</View>;
};

export default ScreenContent;
