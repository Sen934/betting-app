import { z } from 'zod';

export const GameDtoSchema = z.object({
  game: z.object({
    id: z.string(),
    teams: z.string().array().length(2),
    odds: z.number().array().length(2),
    bets: z.number().array().length(2),
  }),
});

export const GamesDtoSchema = z.object({
  games: z.array(GameDtoSchema.shape.game),
});

export const ApiErrorDataDtoSchema = z.object({
  errors: z.record(z.string(), z.array(z.string())),
});

export const ApiErrorDataSchema = z.array(z.string());
