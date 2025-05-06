import type { GamesDto, GameDto } from '@/shared/api/api.types.ts';
import type { Game, Games } from '@/entities/game/game.types.ts';

export function transformGameDtoToGame(gameDto: GameDto): Game {
  const { game } = gameDto;

  return {
    ...game,
  };
}

export function transformGamesDtoToGames(gamesDto: GamesDto): Games {
  const { games } = gamesDto;

  return {
    games: Object.fromEntries(
      games.map((game) => [game.id, transformGameDtoToGame({ game })]),
    ),
  };
}
