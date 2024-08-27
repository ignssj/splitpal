import { handleRequestError } from "../../helpers/ServiceHelper";
import { HttpResponse } from "../types";
import { GetSplit } from "../splits/types";
import * as T from "./types";
import api from "..";

const useUserService = () => {
  const getMyParticipations = async (req: T.GetParticipationsRequest): HttpResponse<GetSplit[]> => {
    try {
      const response = await api.get(`/users/${req.userId}/participations`);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const updateMyData = async (req: T.UpdateMyDataRequest): HttpResponse<T.User> => {
    try {
      const response = await api.put(`/users/${req.userId}`, req.body);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  return {
    getMyParticipations,
    updateMyData,
  };
};

export default useUserService;
