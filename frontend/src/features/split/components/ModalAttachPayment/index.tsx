import React from "react";
import Input from "../../../../components/Input";
import Row from "../../../../components/Row";
import Spaced from "../../../../components/Spaced";
import stylesheet from "./styles";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { Button, Chip, Dialog, Text } from "react-native-paper";
import { IModal } from "../../../../types";
import * as DocumentPicker from "expo-document-picker";

const ModalAttachPayment: React.FC<IModal> = ({ visible, setVisible }) => {
  const styles = useThemedStyles(stylesheet);
  const [attachment, setAttachment] = React.useState<DocumentPicker.DocumentPickerAsset>();
  const [paymentValue, setPaymentValue] = React.useState<string>("");

  const handleValueChange = (value: string) => {
    setPaymentValue(value);
  };

  const handleAttach = async () => {
    const file = await DocumentPicker.getDocumentAsync({ type: "application/pdf", multiple: false });
    if (file.canceled) return;

    setAttachment(file.assets[0]);
  };

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
            <Chip icon='attachment' onPress={handleAttach}>
              {attachment ? attachment.name : "Clique para anexar"}
            </Chip>
          </Row>
          <Input label='Valor' value={paymentValue} onChangeText={handleValueChange} keyboardType='decimal-pad' />
          <Button mode='contained' onPress={handleSave} disabled={!attachment || !paymentValue}>
            Salvar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalAttachPayment;
