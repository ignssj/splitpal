import React from "react";
import Title from "../../../components/Title";
import { Screen } from "../../../components/Screen";
import { Rounded } from "../../../components/Rounded";
import { useRoute } from "@react-navigation/native";
import { SplitDetailsRouteParams } from "./types";
import Card from "../../../components/Card";
import Spaced from "../../../components/Spaced";
import PaymentList from "../components/PaymentList";
import usePayments from "../../../hooks/usePayments";
import { Split } from "../components/Split";

const SplitDetails = () => {
  const { split } = useRoute<SplitDetailsRouteParams>().params;
  const { data: payments, isFetching: isFetchingPayments } = usePayments({ split_id: split.id });

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
            <Title>Pagamentos</Title>
            <PaymentList data={payments} loading={isFetchingPayments} />
          </Card>
        </Spaced>
      </Screen.Content>
    </Screen.Root>
  );
};

export default SplitDetails;
