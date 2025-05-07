import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import { Box, Stack, Typography } from '@mui/material';
import { GamesDashboard } from '@/widgets/games-dashboard/GamesDashboard.ui.tsx';

export default function HomePage() {
  return (
    <Stack direction="column" style={{ height: '100%' }}>
      <Stack direction="row" alignItems="center" spacing={1} component="header">
        <Typography variant="h3">BET</Typography>
        <CasinoOutlinedIcon fontSize="large" />
      </Stack>
      <Box component="main" flexGrow={1}>
        <GamesDashboard />
      </Box>
    </Stack>
  );
}
