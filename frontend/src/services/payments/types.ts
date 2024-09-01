export type Payment = {
  id: string;
  receipt: string;
  total: number;
  user_id: string;
  split_id: string;
  created_at: string;
  updated_at: string;
};

export type PaymentFilter = Partial<Payment>;

export type CreatePayment = {
  receipt: string;
  total: number;
  user_id: string;
  split_id: string;
};
