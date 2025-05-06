import type { LoaderFunctionArgs } from 'react-router';
import { queryClient } from '@/shared/queryClient.ts';
import { gamesQueryOptions } from '@/entities/game/game.api.ts';

export default async function homePageLoader(args: LoaderFunctionArgs) {
  await queryClient.prefetchQuery(gamesQueryOptions());
  return args;
}
