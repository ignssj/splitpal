import React from "react";
import Input from "../../../../components/Input";
import stylesheet from "./styles";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { Button, Dialog, Text } from "react-native-paper";
import { IModalJoinSplit } from "./types";

const ModalJoinSplit: React.FC<IModalJoinSplit> = ({ code, visible, setVisible, onCodeChange, onJoin }) => {
  const styles = useThemedStyles(stylesheet);

  return (
    <Dialog
      visible={visible}
      style={styles.dialog}
      dismissable
      onDismiss={() => {
        setVisible(!visible);
      }}
    >
      <Dialog.Title>Participar</Dialog.Title>
      <Text>Insira o código de ingresso do pagamento no qual você deseja ingressar</Text>
      <Input label='Código' value={code} onChangeText={onCodeChange} />
      <Button mode='contained' onPress={onJoin}>
        Ingressar
      </Button>
    </Dialog>
  );
};

export default ModalJoinSplit;
