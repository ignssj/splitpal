import React from "react";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import useSplitService from "../../../services/splits";
import useStorage from "../../../hooks/useStorage";
import { Button } from "react-native-paper";
import { Screen } from "../../../components/Screen";
import { isError } from "../../../helpers/ServiceHelper";
import { SplitInput } from "./types";
import { ErrorToast, SuccessToast } from "../../../helpers/ToastHelper";
import Card from "../../../components/Card";

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

    setSplitForm({ name: "", category: "", total: "", qrcode: "" });
    SuccessToast("Pagamento criado", "O pagamento foi criado com sucesso");
  };

  return (
    <Screen.Root>
      <Screen.Header>
        <Title>Novo pagamento</Title>
      </Screen.Header>
      <Screen.Content>
        <Card>
          <Input label='Nome' value={splitForm.name} onChangeText={handleNameChange} />
          <Input label='Categoria' value={splitForm.category} onChangeText={handleCategoryChange} />
          <Input label='Valor' value={splitForm.total} keyboardType='decimal-pad' onChangeText={handleValueChange} />
          <Input label='QR Code' value={splitForm.qrcode} onChangeText={handleQRCodeChange} />
          <Button mode='contained' onPress={handleCreate} loading={isLoading}>
            Criar
          </Button>
        </Card>
      </Screen.Content>
    </Screen.Root>
  );
};

export default CreateSplit;
