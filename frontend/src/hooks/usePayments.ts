import { useQuery } from "@tanstack/react-query";
import { isError } from "../helpers/ServiceHelper";
import { useRefetchOnFocus } from "./useRefetchOnFocus";
import { Payment } from "../services/payments/types";
import usePaymentService from "../services/payments";

const usePayments = () => {
  const { getAll } = usePaymentService();

  const fetchData = async () => {
    const response = await getAll();
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
