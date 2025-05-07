import { delay, http, HttpResponse } from 'msw';
import type { GameDto } from '@/shared/api/api.types.ts';

const games = [
  { id: '1', teams: ['teamA', 'teamB'], odds: [1.5, 2.5], bets: [10, 5] },
  { id: '2', teams: ['teamC', 'teamD'], odds: [3, 4], bets: [5, 8] },
  { id: '3', teams: ['teamA', 'teamB'], odds: [6, 7], bets: [1, 2] },
  { id: '4', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '5', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '6', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '7', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '8', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '9', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '10', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '11', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '12', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '13', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '14', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
  { id: '15', teams: ['teamA', 'teamB'], odds: [4, 8], bets: [3, 4] },
];

const TEAM_NAMES = [
  'Lions',
  'Wolves',
  'Tigers',
  'Dragons',
  'Hawks',
  'Panthers',
  'Eagles',
];

function getRandomTeamName(exclude: string = ''): string {
  const choices = TEAM_NAMES.filter((name) => name !== exclude);
  return choices[Math.floor(Math.random() * choices.length)];
}

function getRandomOdd(): number {
  return parseFloat((Math.random() * 8 + 1.5).toFixed(2)); // 1.5–9.5
}

function getRandomBet(): number {
  return Math.floor(Math.random() * 100); // 0–99
}

function generateRandomGame(): GameDto {
  const teamA = getRandomTeamName();
  const teamB = getRandomTeamName(teamA); // ensure teamB ≠ teamA

  const zipped = [
    { team: teamA, odd: getRandomOdd(), bet: getRandomBet() },
    { team: teamB, odd: getRandomOdd(), bet: getRandomBet() },
  ];

  // Optional: shuffle if you want order to vary
  for (let i = zipped.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [zipped[i], zipped[j]] = [zipped[j], zipped[i]];
  }

  return {
    id: Math.floor(Math.random() * 1_000_000).toString(),
    teams: [zipped[0].team, zipped[1].team],
    odds: [zipped[0].odd, zipped[1].odd],
    bets: [zipped[0].bet, zipped[1].bet],
  };
}

function addRandomGame(): GameDto {
  const newGame = generateRandomGame();
  games.push(newGame);

  return newGame;
}

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/games`, async () => {
    await delay(500);
    return HttpResponse.json({
      games,
    });
  }),

  http.post(`${import.meta.env.VITE_API_URL}/games/new`, async () => {
    await delay(500);

    const newGame = addRandomGame();
    return HttpResponse.json(newGame);
  }),
];
