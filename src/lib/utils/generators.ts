import { v4 } from "uuid";
import { teams } from "../constants/teams";
import { MatchTier } from "../types/player";
import { Match, StandaloneMatch } from "@prisma/client";

export const teamGenerator = () => {
  const formattedTeams = Object.entries(teams).map(([name, logo]) => ({
    name,
    logo,
  }));
  return formattedTeams[Math.floor(Math.random() * formattedTeams.length)];
};

export const matchGenerator = (
  playerIds: string[],
  championshipId: string,
  matchTier: MatchTier = MatchTier.BASE
): Match => {
  const player1Id = playerIds[Math.floor(Math.random() * playerIds.length)];
  let player2Id = playerIds[Math.floor(Math.random() * playerIds.length)];
  while (player1Id === player2Id) {
    player2Id = playerIds[Math.floor(Math.random() * playerIds.length)];
  }

  return {
    isFinished: false,
    id: v4(),
    player1Id,
    player2Id,
    player1Team: teamGenerator().name,
    player2Team: teamGenerator().name,
    championshipId,
    matchTier,
    winnerId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};

export const standaloneMatchGenerator = (
  playerIds: string[]
): StandaloneMatch => {
  const player1Id = playerIds[Math.floor(Math.random() * playerIds.length)];
  let player2Id = playerIds[Math.floor(Math.random() * playerIds.length)];
  while (player1Id === player2Id) {
    player2Id = playerIds[Math.floor(Math.random() * playerIds.length)];
  }

  return {
    isFinished: false,
    id: v4(),
    player1Id,
    player2Id,
    player1Team: teamGenerator().name,
    player2Team: teamGenerator().name,
    winnerId: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
};
