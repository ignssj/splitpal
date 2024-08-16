export type Payment = {
  id: string;
  receipt: string;
  value: string;
  user_id: string;
  split_id: string;
};

export type PaymentFilter = Partial<Payment>;
