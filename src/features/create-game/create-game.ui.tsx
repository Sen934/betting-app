import { Button } from '@mui/material';
import { useCreateGameMutation } from '@/features/create-game/create-game.mutation.ts';

export const CreateGameButton: React.FC = () => {
  // TODO: Error handling
  const { mutate, isPending } = useCreateGameMutation();

  return (
    <Button onClick={mutate} loading={isPending}>
      Generate Game
    </Button>
  );
};
