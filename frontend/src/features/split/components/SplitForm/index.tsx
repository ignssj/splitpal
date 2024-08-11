import React from "react";
import Spaced from "../../../../components/Spaced";
import { ISplitForm } from "./types";
import { View } from "react-native";
import Card from "../../../../components/Card";

const SplitForm: React.FC<ISplitForm> = ({ children }) => {
  return (
    <Card>
      <Spaced gap={10}>{children}</Spaced>
    </Card>
  );
};

export default SplitForm;
