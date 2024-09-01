import api from "..";
import { createQueryString, handleRequestError } from "../../helpers/ServiceHelper";
import { HttpResponse } from "../types";
import * as T from "./types";

const usePaymentService = () => {
  const getAll = async (filter?: T.PaymentFilter): HttpResponse<T.Payment[]> => {
    const query = createQueryString(filter);
    try {
      const response = await api.get(`/payments?${query}`);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const create = async (payment: T.CreatePayment): HttpResponse<T.Payment> => {
    const form = new FormData();
    form.append("total", payment.total.toString());
    form.append("user_id", payment.user_id);
    form.append("split_id", payment.split_id);
    form.append("receipt", payment.receipt);
    try {
      const response = await api.post("/payments", payment);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  return {
    getAll,
    create,
  };
};

export default usePaymentService;
