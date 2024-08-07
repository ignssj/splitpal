export type HttpResponse<T> = Promise<
  | {
      data: T;
    }
  | false
>;
