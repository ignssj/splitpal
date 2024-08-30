import React from "react";
import Input from "../../../../components/Input";
import Row from "../../../../components/Row";
import Spaced from "../../../../components/Spaced";
import stylesheet from "./styles";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { Button, Chip, Dialog, Text } from "react-native-paper";
import { IModal } from "../../../../types";

const ModalAttachPayment: React.FC<IModal> = ({ visible, setVisible }) => {
  const styles = useThemedStyles(stylesheet);
  const [attachmentName, setAttachmentName] = React.useState<string>("");
  const [paymentValue, setPaymentValue] = React.useState<string>("");

  const handleValueChange = (value: string) => {
    setPaymentValue(value);
  };

  const handleAttach = () => {};

  const handleSave = () => {};

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
            {attachmentName ? (
              <Text>{attachmentName}</Text>
            ) : (
              <Chip icon='attachment' onPress={handleAttach}>
                Clique para anexar
              </Chip>
            )}
          </Row>
          <Input label='Valor' value={paymentValue} onChangeText={handleValueChange} keyboardType='decimal-pad' />
          <Button mode='contained' onPress={handleSave}>
            Salvar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalAttachPayment;
