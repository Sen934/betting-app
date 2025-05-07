import CasinoOutlinedIcon from '@mui/icons-material/CasinoOutlined';
import { Box, Typography } from '@mui/material';
import { GamesDashboard } from '@/widgets/games-dashboard/GamesDashboard.ui.tsx';

export default function HomePage() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap="4px"
        component="header"
      >
        <Typography variant="h3">BET</Typography>
        <CasinoOutlinedIcon fontSize="large" />
      </Box>
      <main>
        <GamesDashboard />
      </main>
      <footer>my social</footer>
    </>
  );
}
