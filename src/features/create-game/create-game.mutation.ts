import {
  type DefaultError,
  useMutation,
  type UseMutationOptions,
} from '@tanstack/react-query';
import { queryClient } from '@/shared/queryClient';
import { createGame } from '@/shared/api/api.service.ts';
import { transformGameDtoToGame } from '@/entities/game/game.lib.ts';
import { GAMES_ROOT_KEY } from '@/entities/game/game.api.ts';
import type { Game } from '@/entities/game/game.types.ts';

export function useCreateGameMutation(
  options: Pick<
    UseMutationOptions<Game, DefaultError, unknown, unknown>,
    'mutationKey' | 'onMutate' | 'onSuccess' | 'onError' | 'onSettled'
  > = {},
) {
  const { mutationKey = [], onError, onSettled } = options;

  return useMutation({
    mutationKey: ['game', 'create', ...mutationKey],

    mutationFn: async () => {
      const { data } = await createGame();
      const game = transformGameDtoToGame(data);
      return game;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: GAMES_ROOT_KEY,
      });
    },

    onError,

    onSettled,
  });
}
