import React from "react";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import Spaced from "../../../components/Spaced";
import usePayments from "../../../hooks/usePayments";
import { Screen } from "../../../components/Screen";
import { Rounded } from "../../../components/Rounded";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SplitDetailsRouteParams } from "./types";
import { Split } from "../components/Split";
import { Payment } from "../components/Payment";
import { FAB } from "../../../components/FAB";
import { PropsStack } from "../../../infra/navigation/models";

const SplitDetails = () => {
  const { split } = useRoute<SplitDetailsRouteParams>().params;
  const { data: payments, isFetching: isFetchingPayments } = usePayments({ split_id: split.id });
  const navigation = useNavigation<PropsStack>();

  const navigateToAttachPayment = () => {
    navigation.navigate("AttachPayment");
  };

  return (
    <Screen.Root>
      <Screen.Header>
        <Rounded.Back />
        <Title>Detalhes do pagamento</Title>
      </Screen.Header>
      <Screen.Content>
        <Spaced gap={15}>
          <Split.Item title='Informações' split={split} />
          <Card>
            <Title>Comprovantes</Title>
            <Payment.List data={payments} loading={isFetchingPayments} />
          </Card>
        </Spaced>
        <FAB.New label='Adicionar comprovante' onPress={navigateToAttachPayment} visible />
      </Screen.Content>
    </Screen.Root>
  );
};

export default SplitDetails;
