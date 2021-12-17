import axios, { AxiosRequestConfig } from 'axios';

import { HTTP_METHODS } from '../interfaces/apiInterfaces';

interface IFetchConfig extends AxiosRequestConfig {
  url: string,
  method: HTTP_METHODS
}

export async function fetch<SuccessResponseData>(config: IFetchConfig): Promise<SuccessResponseData> {
  try {
    const { data } = await axios.request<SuccessResponseData>(config);

    return data;
  } catch (error) {
    // Here we can handle different cases and throwing different errors based on error type
    throw new Error('')
  }
}