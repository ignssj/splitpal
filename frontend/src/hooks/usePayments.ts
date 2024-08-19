import { useQuery } from "@tanstack/react-query";
import { isError } from "../helpers/ServiceHelper";
import { useRefetchOnFocus } from "./useRefetchOnFocus";
import { Payment, PaymentFilter } from "../services/payments/types";
import usePaymentService from "../services/payments";
import { useAppSelector } from "../redux/hooks";

const usePayments = (filter?: Omit<PaymentFilter, "user_id">) => {
  const userId = useAppSelector((state) => state.user.id);
  const { getAll } = usePaymentService();

  const fetchData = async () => {
    const response = await getAll({ ...filter, user_id: userId });
    if (isError(response)) return [];

    return response.data;
  };

  const query = useQuery({
    queryKey: ["all-payments"],
    queryFn: fetchData,
  });

  useRefetchOnFocus(query.refetch);
  return {
    ...query,
    data: query.data as Payment[],
  };
};

export default usePayments;
