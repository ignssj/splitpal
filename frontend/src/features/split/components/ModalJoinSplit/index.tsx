import React from "react";
import Input from "../../../../components/Input";
import Spaced from "../../../../components/Spaced";
import stylesheet from "./styles";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import useModalJoinSplitViewModel from "./ViewModel";
import { Button, Dialog, Text } from "react-native-paper";
import { IModal } from "../../../../types/Modal";

const ModalJoinSplit: React.FC<IModal> = ({ visible, setVisible }) => {
  const styles = useThemedStyles(stylesheet);
  const { state, handlers } = useModalJoinSplitViewModel();
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
      <Dialog.Content>
        <Spaced gap={25}>
          <Text>Insira o ID do pagamento no qual deseja ingressar</Text>
          <Input label='Código' value={state.code} onChangeText={handlers.handleCodeChange} />
          <Button mode='contained' onPress={() => handlers.handleJoin(setVisible)} disabled={state.code.length !== 36} loading={state.isLoading}>
            Ingressar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalJoinSplit;
