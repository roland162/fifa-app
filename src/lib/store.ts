// zustand store

import create from "zustand";

type Store = {
  players: string[];
  addPlayer: (player: string) => void;
  removePlayer: (player: string) => void;
  addMatchResults: (
    player1: string,
    player2: string,
    player1Goals: number,
    player2Goals: number
  ) => void;
  clearMatchResults: () => void;
  standings: {
    player: string;
    points: number;
    goalsScored: number;
    goalsConceded: number;
  }[];

  getStandings: () => {
    player: string;
    points: number;
    goalsScored: number;
    goalsConceded: number;
  }[];
};
export const useStore = create<Store>((set, get) => ({
  standings: [],
  players: [],
  addPlayer: (player) =>
    set((state) => ({
      players: [...state.players, player],
      standings: [
        ...state.standings,
        {
          player: player,
          points: 0,
          goalsScored: 0,
          goalsConceded: 0,
        },
      ],
    })),
  removePlayer: (player) =>
    set((state) => ({ players: state.players.filter((p) => p !== player) })),
  addMatchResults: (player1, player2, player1Goals, player2Goals) => {
    set((state) => {
      const standings = state.standings;
      const player1Index = standings.findIndex((s) => s.player === player1);
      const player2Index = standings.findIndex((s) => s.player === player2);
      standings[player1Index].goalsScored += player1Goals;
      standings[player1Index].goalsConceded += player2Goals;
      standings[player2Index].goalsScored += player2Goals;
      standings[player2Index].goalsConceded += player1Goals;
      if (player1Goals > player2Goals) {
        standings[player1Index].points += 3;
      } else if (player1Goals < player2Goals) {
        standings[player2Index].points += 3;
      } else {
        standings[player1Index].points += 1;
        standings[player2Index].points += 1;
      }
      return { standings };
    });
  },
  clearMatchResults: () => set({ standings: [] }),
  getStandings: () => {
    const standings = get().standings;
    return standings.sort((a, b) => {
      if (a.points > b.points) {
        return -1;
      } else if (a.points < b.points) {
        return 1;
      } else {
        if (a.goalsScored - a.goalsConceded > b.goalsScored - b.goalsConceded) {
          return -1;
        } else if (
          a.goalsScored - a.goalsConceded <
          b.goalsScored - b.goalsConceded
        ) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  },
}));
