import React from "react";
import View from "../../View";
import { IScreenContent } from "../types";

const ScreenContent: React.FC<IScreenContent> = ({ children, style }) => {
  return <View style={style}>{children}</View>;
};

export default ScreenContent;
