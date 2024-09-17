import { Payment } from "../../../../services/payments/types";

export interface IPaymentList {
  data: Payment[];
  loading: boolean;
}
