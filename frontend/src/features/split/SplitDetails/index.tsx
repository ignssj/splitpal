import React from "react";
import Title from "../../../components/Title";
import useSplit from "../../../hooks/useSplit";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { Screen } from "../../../components/Screen";
import { Rounded } from "../../../components/Rounded";
import { useRoute } from "@react-navigation/native";
import { SplitDetailsRouteParams } from "./types";
import Card from "../../../components/Card";
import Spaced from "../../../components/Spaced";
import PaymentList from "../components/PaymentList";

const SplitDetails = () => {
  const { splitId } = useRoute<SplitDetailsRouteParams>().params;
  const { data: split, isLoading } = useSplit(splitId);

  if (isLoading) return <View />;

  return (
    <Screen.Root>
      <Screen.Header>
        <Rounded.Back />
        <Title>Detalhes do pagamento</Title>
      </Screen.Header>
      <Screen.Content flex={1}>
        <Spaced gap={15}>
          <Card>
            <Title>Informações</Title>
            <Text>{split.name}</Text>
            <Text>{split.category}</Text>
            <Text>{split.total}</Text>
          </Card>
          <Card>
            <Title>Pagamentos</Title>
            <PaymentList />
          </Card>
        </Spaced>
      </Screen.Content>
    </Screen.Root>
  );
};

export default SplitDetails;
