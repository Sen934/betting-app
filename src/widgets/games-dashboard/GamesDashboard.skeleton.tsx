import { Box, Skeleton, Stack } from '@mui/material';

export const GamesDashboardSkeleton = () => {
  return (
    <Box flexDirection="column" sx={{ p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="rectangular" width={180} height={40} />
      </Box>

      <Stack direction="row" flexWrap="wrap" gap={2}>
        {Array.from({ length: 16 }).map((_, idx) => (
          <Skeleton key={idx} variant="rectangular" width={200} height={80} />
        ))}
      </Stack>
    </Box>
  );
};
