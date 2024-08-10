export enum MatchTier {
  BASE = "BASE",
  SEMI_FINAL = "SEMI_FINAL",
  FINAL = "FINAL",
}

export type Player = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  wins: number;
  goalsScored: number;
};

export type Championship = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  playerIds: string[];
  semiFinalIds: string[];
  finalId: string;
  baseMatchIds: string[];
  numberOfMatchesPerPlayer: number;
  maxMatches: number;
};
