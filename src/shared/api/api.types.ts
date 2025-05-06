import { z } from 'zod';
import {
  ApiErrorDataDtoSchema,
  ApiErrorDataSchema,
  GameDtoSchema,
  GamesDtoSchema,
} from './api.contracts.ts';

export type GamesDto = z.infer<typeof GamesDtoSchema>;
export type GameDto = z.infer<typeof GameDtoSchema>;

export type ApiErrorDataDto = z.infer<typeof ApiErrorDataDtoSchema>;
export type ApiErrorData = z.infer<typeof ApiErrorDataSchema>;
