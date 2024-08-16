import React from "react";
import SplitForm from "../components/SplitForm";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import useSplitService from "../../../services/splits";
import useStorage from "../../../hooks/useStorage";
import { Button } from "react-native-paper";
import { Screen } from "../../../components/Screen";
import { isError } from "../../../helpers/ServiceHelper";
import { SplitInput } from "./types";
import { View } from "react-native";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";

const CreateSplit = () => {
  const { create } = useSplitService();
  const { read } = useStorage();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [splitForm, setSplitForm] = React.useState<SplitInput>({
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

    SuccessToast("Pagamento criado", "O pagamento foi criado com sucesso");
  };

  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Novo pagamento</Title>
      </Screen.Header>
      <Screen.Content flex={0.9}>
        <SplitForm>
          <Input label='Nome' value={splitForm.name} onChangeText={handleNameChange} />
          <Input label='Categoria' value={splitForm.category} onChangeText={handleCategoryChange} />
          <Input label='Valor' value={splitForm.total} keyboardType='decimal-pad' onChangeText={handleValueChange} />
          <Input label='QR Code' value={splitForm.qrcode} onChangeText={handleQRCodeChange} />
          <Button mode='contained' onPress={handleCreate} loading={isLoading}>
            Criar
          </Button>
        </SplitForm>
      </Screen.Content>
    </Screen.Root>
  );
};

export default CreateSplit;
