import { api } from './api.instance.ts';
import type { AxiosRequestConfig } from 'axios';
import { responseContract } from './api.lib.ts';
import { GameDtoSchema, GamesDtoSchema } from './api.contracts.ts';

export function getAllGames(config?: AxiosRequestConfig) {
  return api.get('/games', config).then(responseContract(GamesDtoSchema));
}

export function createGame(config?: AxiosRequestConfig) {
  return api.post('/games/new', config).then(responseContract(GameDtoSchema));
}
