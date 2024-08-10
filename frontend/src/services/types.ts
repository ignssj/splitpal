export type HttpResponse<T> = Promise<SuccessMessage<T> | ErrorMessage>;

export type SuccessMessage<T> = {
  data: T;
};

export type ErrorMessage = {
  error: string;
};
