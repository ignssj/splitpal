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
import ModalAttachPayment from "../components/ModalAttachPayment";
import styles from "./styles";

const SplitDetails = () => {
  const { split } = useRoute<SplitDetailsRouteParams>().params;
  const { data: payments, isFetching: isFetchingPayments } = usePayments({ split_id: split.id });
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);

  const openModal = () => setModalVisible(true);

  return (
    <Screen.Root style={styles.root}>
      <Screen.Header>
        <Rounded.Back />
        <Title>Detalhes do pagamento</Title>
      </Screen.Header>
      <Screen.Content style={styles.content}>
        <Spaced gap={15}>
          <Split.Item title='Informações' split={split} />
          <Card>
            <Title>Comprovantes</Title>
            <Payment.List data={payments} loading={isFetchingPayments} />
          </Card>
        </Spaced>
        <FAB.New label='Adicionar comprovante' onPress={openModal} visible />
      </Screen.Content>
      <ModalAttachPayment visible={modalVisible} setVisible={setModalVisible} />
    </Screen.Root>
  );
};

export default SplitDetails;
