import React from "react";
import Input from "../../../../components/Input";
import Row from "../../../../components/Row";
import Spaced from "../../../../components/Spaced";
import stylesheet from "./styles";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import { Button, Chip, Dialog, Text } from "react-native-paper";
import { IModal } from "../../../../types";
import { TextInputMask } from "react-native-masked-text";
import * as DocumentPicker from "expo-document-picker";

const ModalAttachPayment: React.FC<IModal> = ({ visible, setVisible }) => {
  const styles = useThemedStyles(stylesheet);
  const [attachment, setAttachment] = React.useState<DocumentPicker.DocumentPickerAsset>();
  const [paymentValue, setPaymentValue] = React.useState({
    masked: "",
    raw: 0,
  });

  const handleValueChange = (masked: string, raw?: string) => {
    setPaymentValue({
      masked,
      raw: raw ? parseInt(raw) : 0,
    });
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
          <TextInputMask
            type='money'
            value={paymentValue.masked}
            onChangeText={handleValueChange}
            keyboardType='decimal-pad'
            customTextInput={Input}
            customTextInputProps={{ label: "Valor" }}
            includeRawValueInChangeText
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$",
              suffixUnit: "",
            }}
          />
          <Button mode='contained' onPress={handleSave} disabled={!attachment || paymentValue.raw < 10}>
            Salvar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalAttachPayment;
