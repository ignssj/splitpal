import api from "..";
import { handleRequestError } from "../../helpers/ServiceHelper";
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

  return {
    create,
  };
};

export default useSplitService;
