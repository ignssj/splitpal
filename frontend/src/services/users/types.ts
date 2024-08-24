import { Payment } from "../payments/types";
import { Split } from "../splits/types";

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface GetParticipationsRequest {
  userId: string;
}

export interface GetParticipationsResponse {
  data: UserParticipation[];
}

export interface UserParticipation extends Split {
  payments: Payment[];
}

export interface UpdateMyDataRequest {
  userId: string;
  body: Omit<User, "id">;
}

export interface UpdateMyDataResponse {
  data: User;
}
