export type Split = {
  id: string;
  name: string;
  category: string;
  total: number;
  qrcode: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateSplitRequest = {
  name: string;
  category: string;
  total: number;
  qrcode: string;
  userId: string;
};

export type GetAllSplits = Partial<Split>;
