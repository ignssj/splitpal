import api from "..";
import { createQueryString, handleRequestError } from "../../helpers/ServiceHelper";
import { HttpResponse } from "../types";
import * as T from "./types";

const useSplitService = () => {
  const create = async (body: T.CreateSplitRequest): HttpResponse<T.Split> => {
    try {
      const response = await api.post("/splits", body);
      return response;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  const getAll = async (filter?: T.GetAllSplits): HttpResponse<T.Split[]> => {
    const query = createQueryString(filter);
    try {
      const response = await api.get(`/splits?${query}`);
      return response;
    } catch (err) {
      return handleRequestError(err);
    }
  };

  return {
    create,
    getAll,
  };
};

export default useSplitService;
