import { keepPreviousData, queryOptions } from '@tanstack/react-query';

import { transformGamesDtoToGames } from './game.lib';
import { getAllGames } from '@/shared/api/api.service.ts';

export const GAMES_ROOT_KEY = ['games'];

export const gamesQueryOptions = () => {
  return queryOptions({
    queryKey: [...GAMES_ROOT_KEY],

    queryFn: async ({ signal }) => {
      const config = { signal };
      const request = getAllGames(config);
      const { data } = await request;
      return transformGamesDtoToGames(data);
    },

    placeholderData: keepPreviousData,
  });
};
