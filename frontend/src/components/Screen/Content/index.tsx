import React from "react";
import { IScreenContent } from "../types";
import ScreenLoading from "../Loading";
import View from "../../View";

const ScreenContent: React.FC<IScreenContent> = ({ flex, children, loading }) => {
  return <View style={{ flex }}>{loading ? <ScreenLoading /> : children}</View>;
};

export default ScreenContent;
