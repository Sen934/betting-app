import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { ErrorHandler } from '@/shared/ui/ErrorHandler.ui.tsx';
import { logError } from '@/shared/ui/ErrorHandler.lib.tsx';
import { GamesDashboardSkeleton } from '@/widgets/games-dashboard/GamesDashboard.skeleton.tsx';
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { gamesQueryOptions } from '@/entities/game/game.api.ts';
import type { Game } from '@/entities/game/game.types.ts';
import { CreateGameButton } from '@/features/create-game/create-game.ui.tsx';

export const GamesDashboard: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler} onError={logError}>
      <Suspense fallback={<GamesDashboardSkeleton />}>
        <BaseGameDashboard />
      </Suspense>
    </ErrorBoundary>
  );
};

const BaseGameDashboard: React.FC = () => {
  const { data } = useSuspenseQuery(gamesQueryOptions());

  return (
    <Box flexDirection="column" sx={{ p: 2 }}>
      <CreateGameButton />

      <Stack direction="row" flexWrap="wrap" gap={2}>
        {Object.values(data.games || 0).map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Stack>
    </Box>
  );
};

type GameCardProps = {
  game: Game;
};

const GameCard: React.FC<GameCardProps> = ({ game }) => (
  <Card variant="outlined">
    <CardContent>
      <Typography variant="h5" gutterBottom>
        {game.teams[0]} vs {game.teams[1]}
      </Typography>
      <Typography variant="body2">
        Bets: {game.bets[0]} vs {game.bets[1]}
        <br />
        Odds: {game.odds[0]} vs {game.odds[1]}
      </Typography>
    </CardContent>
  </Card>
);
