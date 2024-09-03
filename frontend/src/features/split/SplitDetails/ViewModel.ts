import { useState } from "react";
import usePayments from "../../../hooks/usePayments";
import { useRoute } from "@react-navigation/native";
import { SplitDetailsRouteParams } from "./types";

const useSplitDetailsViewModel = () => {
  const { split } = useRoute<SplitDetailsRouteParams>().params;
  const { data: payments, isFetching: isFetchingPayments } = usePayments({ split_id: split.id });
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = () => setModalVisible(true);

  return {
    state: {
      split,
      payments,
      isFetchingPayments,
      modalVisible,
    },
    handlers: {
      openModal,
    },
    setters: {
      setModalVisible,
    },
  };
};

export default useSplitDetailsViewModel;
