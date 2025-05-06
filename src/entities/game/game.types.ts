import { z } from 'zod';
import { GameSchema, GamesSchema } from '@/entities/game/game.contracts.ts';

export type Game = z.infer<typeof GameSchema>;
export type Games = z.infer<typeof GamesSchema>;
