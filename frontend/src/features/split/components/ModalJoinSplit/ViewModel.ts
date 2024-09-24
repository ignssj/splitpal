import React from "react";
import useSplitService from "../../../../services/splits";
import { useAppSelector } from "../../../../redux/hooks";
import { ErrorToast, SuccessToast } from "../../../../helpers/ToastHelper";
import { isError } from "../../../../helpers/ServiceHelper";

const useModalJoinSplitViewModel = () => {
  const userId = useAppSelector((state) => state.user.id);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [code, setCode] = React.useState<string>("");
  const { join } = useSplitService();

  const handleCodeChange = (code: string) => {
    setCode(code);
  };

  const handleJoin = async (setVisible: (b: boolean) => void) => {
    if (!code) return;

    setIsLoading(true);
    const participation = await join(code, userId);
    setIsLoading(false);
    if (isError(participation)) return ErrorToast("Erro ao ingressar no pagamento", "Tente novamente");

    SuccessToast("Ingresso realizado", "Você ingressou no pagamento com sucesso");
    setCode("");
    setVisible(false);
  };
  return {
    state: {
      isLoading,
      code,
    },
    handlers: {
      handleJoin,
      handleCodeChange,
    },
  };
};

export default useModalJoinSplitViewModel;
