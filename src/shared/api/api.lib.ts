import { ZodType } from 'zod';
import type { AxiosResponse } from 'axios';
import type { ApiErrorData, ApiErrorDataDto } from './api.types.ts';

export function responseContract<Data>(schema: ZodType<Data>) {
  return function parseResponse(
    response: AxiosResponse<unknown>,
  ): AxiosResponse<Data> {
    const data = schema.parse(response.data);
    return { ...response, data };
  };
}

export function normalizeValidationErrors(data: ApiErrorDataDto): ApiErrorData {
  return Object.entries(data.errors).flatMap(([field, messages]) =>
    messages.map((message) => `${field} ${message}`),
  );
}
