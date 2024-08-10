import { ErrorMessage } from "../services/types";

export const handleRequestError = (err: unknown): ErrorMessage => {
  console.error(err);
  return {
    error: err instanceof Error ? err.message : "An error occurred",
  };
};

export const isError = (response: unknown): response is ErrorMessage => {
  return (response as ErrorMessage).error !== undefined;
};
