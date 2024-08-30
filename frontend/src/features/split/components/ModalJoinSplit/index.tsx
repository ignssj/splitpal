import React from "react";
import Input from "../../../../components/Input";
import useSplitService from "../../../../services/splits";
import useThemedStyles from "../../../../hooks/useThemedStyles";
import stylesheet from "./styles";
import { Button, Dialog, Text } from "react-native-paper";
import { useAppSelector } from "../../../../redux/hooks";
import { isError } from "../../../../helpers/ServiceHelper";
import { ErrorToast, SuccessToast } from "../../../../helpers/ToastHelper";
import Spaced from "../../../../components/Spaced";
import { IModal } from "../../../../types";

const ModalJoinSplit: React.FC<IModal> = ({ visible, setVisible }) => {
  const userId = useAppSelector((state) => state.user.id);
  const styles = useThemedStyles(stylesheet);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [code, setCode] = React.useState<string>("");
  const { join } = useSplitService();

  const handleCodeChange = (code: string) => {
    setCode(code);
  };

  const handleJoin = async () => {
    if (!code) return;

    setIsLoading(true);
    const participation = await join(code, userId);
    setIsLoading(false);
    if (isError(participation)) return ErrorToast("Erro ao ingressar no pagamento", "Tente novamente");

    SuccessToast("Ingresso realizado", "Você ingressou no pagamento com sucesso");
    setCode("");
    setVisible(!visible);
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
      <Dialog.Title>Participar</Dialog.Title>
      <Dialog.Content>
        <Spaced gap={25}>
          <Text>Insira o ID do pagamento no qual deseja ingressar</Text>
          <Input label='Código' value={code} onChangeText={handleCodeChange} />
          <Button mode='contained' onPress={handleJoin} disabled={code.length !== 36} loading={isLoading}>
            Ingressar
          </Button>
        </Spaced>
      </Dialog.Content>
    </Dialog>
  );
};

export default ModalJoinSplit;
