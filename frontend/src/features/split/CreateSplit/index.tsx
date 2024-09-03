import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import Card from "../../../components/Card";
import ModalJoinSplit from "../components/ModalJoinSplit";
import useCreateSplitViewModel from "./ViewModel";
import styles from "./styles";
import { Button } from "react-native-paper";
import { Screen } from "../../../components/Screen";

const CreateSplit = () => {
  const { state, handlers } = useCreateSplitViewModel();
  return (
    <Screen.Root style={styles.root}>
      <Screen.Header>
        <Title>Novo pagamento</Title>
      </Screen.Header>
      <Screen.Content style={styles.content}>
        <Card>
          <Input label='Nome' value={state.splitForm.name} onChangeText={handlers.handleNameChange} />
          <Input label='Categoria' value={state.splitForm.category} onChangeText={handlers.handleCategoryChange} />
          <Input label='Valor' value={state.splitForm.total} keyboardType='decimal-pad' onChangeText={handlers.handleValueChange} />
          <Input label='QR Code' value={state.splitForm.qrcode} onChangeText={handlers.handleQRCodeChange} />
          <Button mode='contained' onPress={handlers.handleCreate} loading={state.isLoading}>
            Criar
          </Button>
        </Card>
        <Button onPress={() => handlers.setModalVisible(true)}>Quero ingressar em um pagamento</Button>
      </Screen.Content>
      <ModalJoinSplit visible={state.modalVisible} setVisible={handlers.setModalVisible} />
    </Screen.Root>
  );
};

export default CreateSplit;
