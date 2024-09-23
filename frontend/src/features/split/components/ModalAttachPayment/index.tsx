import React from "react";
import Row from "../../../../components/Row";
import Spaced from "../../../../components/Spaced";
import MaskedValue from "../../../../components/MaskedValue";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import useModalAttachPaymentViewModel from "./ViewModel";
import stylesheet from "./styles";
import { Button, Chip, Dialog, Text } from "react-native-paper";
import { IModal } from "../../../../types/Modal";

const ModalAttachPayment: React.FC<IModal> = ({ visible, setVisible }) => {
  const styles = useThemedStyles(stylesheet);
  const { state, handlers } = useModalAttachPaymentViewModel();

  return (
    <Dialog
      visible={visible}
      style={styles.dialog}
      dismissable
      onDismiss={() => {
        setVisible(!visible);
      }}
    >
      <Dialog.Title>Adicionar comprovante</Dialog.Title>
      <Dialog.Content>
        <Spaced gap={20}>
          <Row style={styles.row}>
            <Text>Comprovante: </Text>
            <Chip icon='attachment' onPress={handlers.handleAttach}>
              {state.attachment ? state.attachment.name : "Clique para anexar"}
            </Chip>
          </Row>
          <MaskedValue onChangeText={handlers.handleValueChange} masked={state.paymentValue.masked} />
          <Button
            mode='contained'
            onPress={() => handlers.handleSave(setVisible)}
            disabled={!state.attachment || state.paymentValue.raw < 10}
            loading={state.isLoading}
          >
            Salvar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalAttachPayment;
