import React from "react";
import SplitForm from "../components/SplitForm";
import Title from "../../../components/Title";
import Input from "../../../components/Input";
import stylesheet from "./styles";
import useThemedStyles from "../../../hooks/useThemedStyles";
import { Button } from "react-native-paper";
import { Rounded } from "../../../components/Rounded";
import { Screen } from "../../../components/Screen";

const CreateSplit = () => {
  const styles = useThemedStyles(stylesheet);

  const [splitForm, setSplitForm] = React.useState({
    name: "",
    category: "",
    value: "",
    qrCode: "",
  });

  const handleNameChange = (name: string) => {
    setSplitForm({ ...splitForm, name });
  };

  const handleCategoryChange = (category: string) => {
    setSplitForm({ ...splitForm, category });
  };

  const handleValueChange = (value: string) => {
    setSplitForm({ ...splitForm, value });
  };

  const handleQRCodeChange = (qrCode: string) => {
    setSplitForm({ ...splitForm, qrCode });
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
        <Input label='Valor' value={splitForm.value} keyboardType='decimal-pad' onChangeText={handleValueChange} />
        <Input label='QR Code' value={splitForm.qrCode} onChangeText={handleQRCodeChange} />
        <Button mode='contained'>Criar</Button>
      </SplitForm>
    </Screen.Root>
  );
};

export default CreateSplit;
