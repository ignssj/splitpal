import { ErrorMessage } from "../services/types";

export const handleRequestError = (err: unknown): ErrorMessage => {
  return {
    error: (err as any).response.data ? (err as any).response.data : "An error occurred",
  };
};

export const isError = (response: unknown): response is ErrorMessage => {
  return (response as ErrorMessage).error !== undefined;
};

export const createQueryString = (params?: Record<string, string | number | boolean>): string => {
  if (!params) return "";
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};
