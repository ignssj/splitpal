export type Split = {
  id: string;
  name: string;
  category: string;
  total: number;
  qrcode: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateSplitRequest = Omit<Split, "id" | "createdAt" | "updatedAt">;
