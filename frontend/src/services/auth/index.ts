import { handleRequestError } from "../../helpers/ServiceHelper";
import { HttpResponse } from "../types";
import api from "..";
import * as T from "./types";

const useAuthService = () => {
  const register = async (
    body: T.RegisterRequest
  ): HttpResponse<T.RegisterResponse> => {
    try {
      const response = await api.post("/auth/register", body);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const login = async (body: T.LoginRequest): HttpResponse<T.LoginResponse> => {
    try {
      const response = await api.post("/auth/login", body);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  return {
    register,
    login,
  };
};

export default useAuthService;
