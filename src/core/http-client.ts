import Axios, { AxiosResponse, CancelTokenSource, AxiosError, AxiosInstance } from 'axios';

export type SuccessResponse<T = any> = AxiosResponse<T>;

export interface FailureResponse<T = any> extends AxiosError<T> {
  errorMessages: string[];
}

export interface YieldResponse<T1 = any, T2 = any> {
  response?: SuccessResponse<T1>;
  error?: FailureResponse<T2>;
}

export type YieldSuccessResponse = (response: AxiosResponse) => YieldResponse;

export type YieldFailureResponse = (error: AxiosError) => YieldResponse;

export const yieldSuccessResponse: YieldSuccessResponse = (response) => {
  return { response } as YieldResponse;
};

export const yieldFailureResponse: YieldFailureResponse = (error) => {
  return { error } as YieldResponse;
};

export const getHTTPClient = (): AxiosInstance => {
  const instance = Axios.create();
  // instance.defaults.baseURL = `https://api.qrcode-monkey.com`;
  instance.defaults.baseURL = `https://qrurl.dev`;

  instance.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      'access-control-allow-origin': '*',
    };
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

export const getExternalHTTPClient = (): AxiosInstance => {
  const instance = Axios.create();
  instance.defaults.baseURL = 'https://app.bl.ink/api/v4';

  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer PH9umV05t8E07e7OXG0ASk09AmWr490h5xWvqmyXMkNRu3tRHT4Al73gLiLZvUCC`;
    return config;
  });
  return instance;
};

export const getCancelRequestSource = (): CancelTokenSource => Axios.CancelToken.source();
