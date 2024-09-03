import { useState } from "react";
import { isError } from "../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import { SplitInput } from "./types";
import useStorage from "../../../hooks/useStorage";
import useSplitService from "../../../services/splits";

const useCreateSplitViewModel = () => {
  const { create } = useSplitService();
  const { read } = useStorage();
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [splitForm, setSplitForm] = useState<SplitInput>({
    name: "",
    category: "",
    total: "",
    qrcode: "",
  });

  const handleNameChange = (name: string) => {
    setSplitForm({ ...splitForm, name });
  };

  const handleCategoryChange = (category: string) => {
    setSplitForm({ ...splitForm, category });
  };

  const handleValueChange = (total: string) => {
    setSplitForm({ ...splitForm, total });
  };

  const handleQRCodeChange = (qrcode: string) => {
    setSplitForm({ ...splitForm, qrcode });
  };

  const handleCreate = async () => {
    const userId = await read("id");
    if (!userId) return;

    setIsLoading(true);
    const createdSplit = await create({ ...splitForm, userId, total: parseFloat(splitForm.total) });
    setIsLoading(false);
    if (isError(createdSplit)) return ErrorToast("Erro ao criar pagamento", "Tente novamente");

    setSplitForm({ name: "", category: "", total: "", qrcode: "" });
    SuccessToast("Pagamento criado", "O pagamento foi criado com sucesso");
  };

  return {
    state: {
      modalVisible,
      isLoading,
      splitForm,
    },
    handlers: {
      setModalVisible,
      handleNameChange,
      handleCategoryChange,
      handleValueChange,
      handleQRCodeChange,
      handleCreate,
    },
  };
};

export default useCreateSplitViewModel;
