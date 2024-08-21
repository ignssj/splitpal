import React from "react";
import { IScreenContent } from "../types";
import ScreenLoading from "../Loading";
import View from "../../View";

const ScreenContent: React.FC<IScreenContent> = ({ style, children, loading }) => {
  return <View style={style}>{loading ? <ScreenLoading /> : children}</View>;
};

export default ScreenContent;
