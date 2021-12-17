import { fetch } from '../helpers/apiHelper';
import { HTTP_METHODS } from '../interfaces/apiInterfaces';

export async function get<SuccessResponseData>(url: string): Promise<SuccessResponseData> {
  try {
    const data = await fetch<SuccessResponseData>({
      url,
      method: HTTP_METHODS.GET,
    });

    return data;
  } catch (error) {
    throw error;
  }
}