import api from "..";
import { createQueryString, handleRequestError } from "../../helpers/ServiceHelper";
import { HttpResponse } from "../types";
import * as T from "./types";

const usePaymentService = () => {
  const getAll = async (filter?: T.PaymentFilter): HttpResponse<T.Payment[]> => {
    const query = createQueryString(filter);
    try {
      const response = await api.get(`/payments?${query}`);
      return response;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  return {
    getAll,
  };
};

export default usePaymentService;
