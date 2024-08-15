import React from "react";
import RoundedDefault from "../Default";
import { IRoundedPreset } from "../types";
import { useNavigation } from "@react-navigation/native";

const RoundedBack: React.FC<IRoundedPreset> = () => {
  const navigation = useNavigation();
  return <RoundedDefault icon='chevron-back' action={navigation.goBack} />;
};

export default RoundedBack;
