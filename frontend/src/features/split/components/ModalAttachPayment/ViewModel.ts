import * as DocumentPicker from "expo-document-picker";
import usePaymentService from "../../../../services/payments";
import { useAppSelector } from "../../../../redux/hooks";
import { SplitDetailsRouteParams } from "../../SplitDetails/types";
import { useRoute } from "@react-navigation/native";
import { isError } from "../../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../../helpers/ToastHelper";
import React from "react";

const useModalAttachPaymentViewModel = () => {
  const { create } = usePaymentService();
  const { split } = useRoute<SplitDetailsRouteParams>().params;
  const user = useAppSelector((state) => state.user);
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

  const handleSave = async (setVisible: (b: boolean) => void) => {
    if (!attachment) return;

    setIsLoading(true);
    const paymentCreated = await create({ receipt: attachment, total: paymentValue.raw, user_id: user.id, split_id: split.id });
    setIsLoading(false);

    if (isError(paymentCreated)) ErrorToast("Erro ao salvar comprovante");

    setVisible(false);
    SuccessToast("Comprovante salvo com sucesso");
  };

  return {
    state: {
      attachment,
      isLoading,
      paymentValue,
    },
    handlers: {
      handleAttach,
      handleSave,
      handleValueChange,
    },
  };
};

export default useModalAttachPaymentViewModel;
