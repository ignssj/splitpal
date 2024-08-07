export type RegisterRequest = {
  username: string;
  password: string;
};

export type RegisterResponse = {
  id: string;
};

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  username: string;
  token: string;
};
