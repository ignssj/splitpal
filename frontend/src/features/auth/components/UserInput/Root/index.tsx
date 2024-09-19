import React from "react";
import Spaced from "../../../../../components/Spaced";
import { View, ViewProps } from "react-native";

const UserRoot: React.FC<ViewProps> = ({ children }) => {
  return (
    <View testID='UserRoot'>
      <Spaced gap={10}>{children}</Spaced>;
    </View>
  );
};

export default UserRoot;
