import React from "react";
import SplitForm from "../components/SplitForm";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import useSplitService from "../../../services/splits";
import useStorage from "../../../hooks/useStorage";
import { Button } from "react-native-paper";
import { Rounded } from "../../../components/Rounded";
import { Screen } from "../../../components/Screen";
import { isError } from "../../../helpers/ServiceHelper";

const CreateSplit = () => {
  const { create } = useSplitService();
  const { read } = useStorage();
  const [splitForm, setSplitForm] = React.useState({
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

    const createdSplit = await create({ ...splitForm, userId, total: parseFloat(splitForm.total) });
    if (isError(createdSplit)) return;
  };

  return (
    <Screen.Root>
      <Screen.Header>
        <Rounded.Back />
        <Title>Novo pagamento</Title>
      </Screen.Header>
      <SplitForm>
        <Input label='Nome' value={splitForm.name} onChangeText={handleNameChange} />
        <Input label='Categoria' value={splitForm.category} onChangeText={handleCategoryChange} />
        <Input label='Valor' value={splitForm.total} keyboardType='decimal-pad' onChangeText={handleValueChange} />
        <Input label='QR Code' value={splitForm.qrcode} onChangeText={handleQRCodeChange} />
        <Button mode='contained' onPress={handleCreate}>
          Criar
        </Button>
      </SplitForm>
    </Screen.Root>
  );
};

export default CreateSplit;
