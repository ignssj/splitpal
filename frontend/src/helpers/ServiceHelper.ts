import { ErrorMessage } from "../services/types";

export const handleRequestError = (err: unknown): ErrorMessage => {
  return {
    error: (err as any).response.data ? (err as any).response.data : "An error occurred",
  };
};

export const isError = (response: unknown): response is ErrorMessage => {
  return (response as ErrorMessage).error !== undefined;
};
