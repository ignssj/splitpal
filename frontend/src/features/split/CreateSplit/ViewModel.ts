import { ISplitForm } from "../../../types/Split";
import { useState } from "react";
import { isError } from "../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import useStorage from "../../../hooks/useStorage";
import useSplitService from "../../../services/splits";

const useCreateSplitViewModel = () => {
  const { create } = useSplitService();
  const { read } = useStorage();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreate = async (form: ISplitForm) => {
    const userId = await read("id");
    if (!userId) return;

    const createdSplit = await create({ ...form, userId, total: parseFloat(form.total) });
    if (isError(createdSplit)) return ErrorToast("Erro ao criar pagamento", "Tente novamente");

    SuccessToast("Pagamento criado", "O pagamento foi criado com sucesso");
  };

  return {
    state: {
      initialSplitValue: {
        name: "",
        category: "",
        total: "",
        qrcode: "",
      },
      modalVisible,
    },
    handlers: {
      setModalVisible,
      handleCreate,
    },
  };
};

export default useCreateSplitViewModel;
