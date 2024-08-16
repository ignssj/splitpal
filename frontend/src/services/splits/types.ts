import { IPayment } from "../payments/types";
import { IUser } from "../users/types";

export interface Split {
  id: string;
  name: string;
  category: string;
  total: number;
  qrcode: string;
  createdAt: string;
  updatedAt: string;
}
export interface GetSplit extends Split {
  participants: IUser[];
  payments: IPayment[];
}

export type CreateSplitRequest = {
  name: string;
  category: string;
  total: number;
  qrcode: string;
  userId: string;
};

export type SplitFilter = Partial<Split>;
