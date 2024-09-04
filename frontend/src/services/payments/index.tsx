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
    form.append("userId", payment.user_id);
    form.append("splitId", payment.split_id);
    form.append("receipt", {
      uri: payment.receipt.uri,
      name: payment.receipt.name,
      type: "application/pdf",
    } as any);
    try {
      const response = await api.post("/payments", form, { headers: { "Content-Type": "multipart/form-data" } });
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
