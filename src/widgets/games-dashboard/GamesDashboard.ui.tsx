import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { ErrorHandler } from '@/shared/ui/ErrorHandler.ui.tsx';
import { logError } from '@/shared/ui/ErrorHandler.lib.tsx';
import { GamesDashboardSkeleton } from '@/widgets/games-dashboard/GamesDashboard.skeleton.tsx';

export const GamesDashboard: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandler} onError={logError}>
      <Suspense fallback={<GamesDashboardSkeleton />}>
        <BaseGameDashboard />
      </Suspense>
    </ErrorBoundary>
  );
};

export const BaseGameDashboard = () => <div>Dashboard</div>;
