export type HttpResponse<T> = Promise<T | ErrorMessage>;

export type ErrorMessage = {
  error: string;
};
