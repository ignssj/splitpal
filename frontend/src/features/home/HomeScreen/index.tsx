import { View, Text } from "react-native";
import React from "react";
import Screen from "../../../components/Screen";
import { useAppSelector } from "../../../redux/hooks";

const HomeScreen = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);

  return (
    <Screen>
      <Text>index</Text>
    </Screen>
  );
};

export default HomeScreen;
