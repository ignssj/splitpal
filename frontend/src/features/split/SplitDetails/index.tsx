import React from "react";
import Title from "../../../components/Title";
import Card from "../../../components/Card";
import Spaced from "../../../components/Spaced";
import ModalAttachPayment from "../components/ModalAttachPayment";
import useSplitDetailsViewModel from "./ViewModel";
import styles from "./styles";
import { Screen } from "../../../components/Screen";
import { Rounded } from "../../../components/Rounded";
import { Split } from "../components/Split";
import { Payment } from "../components/Payment";
import { FAB } from "../../../components/FAB";

const SplitDetails = () => {
  const { state, handlers, setters } = useSplitDetailsViewModel();
  return (
    <Screen.Root style={styles.root}>
      <Screen.Header>
        <Rounded.Back />
        <Title>Detalhes do Split</Title>
      </Screen.Header>
      <Screen.Content style={styles.content}>
        <Split.Item title='Informações' split={state.split} />
        <Card style={styles.card}>
          <Title>Pagamentos efetuados</Title>
          <Payment.List data={state.payments} loading={state.isFetchingPayments} />
        </Card>
      </Screen.Content>
      <FAB.New label='Adicionar pagamento' onPress={handlers.openModal} visible bottom={20} />
      <ModalAttachPayment visible={state.modalVisible} setVisible={setters.setModalVisible} />
    </Screen.Root>
  );
};

export default SplitDetails;
