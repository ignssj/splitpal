import React from "react";
import View from "../View";
import { ISpaced } from "./types";

const Spaced: React.FC<ISpaced> = ({ gap, children }) => {
  return <View style={{ gap: gap }}>{children}</View>;
};

export default Spaced;
