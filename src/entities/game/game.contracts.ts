import { z } from 'zod';

export const GameSchema = z.object({
  id: z.string(),
  teams: z.string().array().length(2),
  odds: z.number().array().length(2),
  bets: z.number().array().length(2),
});

export const GamesSchema = z.object({
  games: z.record(z.string(), GameSchema),
});
