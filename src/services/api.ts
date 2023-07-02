import axios, { AxiosError, AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export const apiRequest = async <T>(
  url: string,
  options = {}
): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await axios(url, options);
    return { data: response.data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      return { error: axiosError.message };
    }
    return { error: (error as Error).message };
  }
};
