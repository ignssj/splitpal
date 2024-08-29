import api from "..";
import { createQueryString, handleRequestError } from "../../helpers/ServiceHelper";
import { HttpResponse } from "../types";
import * as T from "./types";

const useSplitService = () => {
  const create = async (body: T.CreateSplitRequest): HttpResponse<T.GetSplit> => {
    try {
      const response = await api.post("/splits", body);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const getAll = async (filter?: T.SplitFilter): HttpResponse<T.GetSplit[]> => {
    const query = createQueryString(filter);
    try {
      const response = await api.get(`/splits?${query}`);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const getById = async (id: string): HttpResponse<T.GetSplit> => {
    try {
      const response = await api.get(`/splits/${id}`);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const join = async (splitId: string, userId: string): HttpResponse<T.SplitParticipant> => {
    try {
      const response = await api.post(`/splits/${splitId}/join/${userId}`);
      return response.data;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  return {
    create,
    getAll,
    getById,
    join,
  };
};

export default useSplitService;
