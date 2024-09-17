import React from "react";
import Row from "../../../../components/Row";
import Spaced from "../../../../components/Spaced";
import MaskedValue from "../../../../components/MaskedValue";
import stylesheet from "./styles";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import * as DocumentPicker from "expo-document-picker";
import usePaymentService from "../../../../services/payments";
import { Button, Chip, Dialog, Text } from "react-native-paper";
import { useAppSelector } from "../../../../redux/hooks";
import { SplitDetailsRouteParams } from "../../SplitDetails/types";
import { useRoute } from "@react-navigation/native";
import { isError } from "../../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../../helpers/ToastHelper";
import { IModal } from "../../../../types/Modal";

const ModalAttachPayment: React.FC<IModal> = ({ visible, setVisible }) => {
  const { create } = usePaymentService();
  const { split } = useRoute<SplitDetailsRouteParams>().params;
  const user = useAppSelector((state) => state.user);
  const styles = useThemedStyles(stylesheet);
  const [attachment, setAttachment] = React.useState<DocumentPicker.DocumentPickerAsset>();
  const [isLoading, setIsLoading] = React.useState(false);
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

  const handleSave = async () => {
    if (!attachment) return;

    setIsLoading(true);
    const paymentCreated = await create({ receipt: attachment, total: paymentValue.raw, user_id: user.id, split_id: split.id });
    setIsLoading(false);

    if (isError(paymentCreated)) ErrorToast("Erro ao salvar comprovante");

    setVisible(!visible);
    SuccessToast("Comprovante salvo com sucesso");
  };

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
          <MaskedValue onChangeText={handleValueChange} masked={paymentValue.masked} />
          <Button mode='contained' onPress={handleSave} disabled={!attachment || paymentValue.raw < 10} loading={isLoading}>
            Salvar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalAttachPayment;
