import { Payment } from "../payments/types";
import { User } from "../users/types";

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
  participants: SplitParticipant[];
  payments: Payment[];
}

export type CreateSplitRequest = {
  name: string;
  category: string;
  total: number;
  qrcode: string;
  userId: string;
};

export type SplitFilter = Partial<Split>;

export interface SplitParticipant {
  id: string;
  organizer: boolean;
  userId: string;
  splitId: string;
  createdAt: string;
  updatedAt: string;
}
