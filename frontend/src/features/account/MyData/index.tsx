import React from "react";
import Title from "../../../components/Title";
import { View } from "react-native";
import { Screen } from "../../../components/Screen";

const MyData = () => {
  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Meus dados</Title>
      </Screen.Header>
      <Screen.Content>
        <View />
      </Screen.Content>
    </Screen.Root>
  );
};

export default MyData;
