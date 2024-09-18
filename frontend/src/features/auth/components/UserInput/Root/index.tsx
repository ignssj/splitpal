import React from "react";
import Spaced from "../../../../../components/Spaced";
import { ViewProps } from "react-native";

const UserRoot: React.FC<ViewProps> = ({ children }) => {
  return <Spaced gap={10}>{children}</Spaced>;
};

export default UserRoot;
