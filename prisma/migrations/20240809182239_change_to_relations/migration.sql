/*
  Warnings:

  - You are about to drop the column `baseMatchIds` on the `Championship` table. All the data in the column will be lost.
  - You are about to drop the column `finalId` on the `Championship` table. All the data in the column will be lost.
  - You are about to drop the column `numberOFMatchesPerPlayer` on the `Championship` table. All the data in the column will be lost.
  - You are about to drop the column `playerIds` on the `Championship` table. All the data in the column will be lost.
  - You are about to drop the column `semiFinalIds` on the `Championship` table. All the data in the column will be lost.
  - You are about to drop the column `player1Goals` on the `Match` table. All the data in the column will be lost.
  - You are about to drop the column `player2Goals` on the `Match` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Championship" DROP COLUMN "baseMatchIds",
DROP COLUMN "finalId",
DROP COLUMN "numberOFMatchesPerPlayer",
DROP COLUMN "playerIds",
DROP COLUMN "semiFinalIds",
ADD COLUMN     "finalMatchId" TEXT,
ADD COLUMN     "groupStageMatchIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "numberOfMatchesPerPlayer" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "playOffMatchIds" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "player1Goals",
DROP COLUMN "player2Goals",
ALTER COLUMN "winnerId" DROP NOT NULL,
ALTER COLUMN "winnerId" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "pastMatchIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "totalGamesPlayed" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "_ChampionshipPlayers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ChampionshipPlayers_AB_unique" ON "_ChampionshipPlayers"("A", "B");

-- CreateIndex
CREATE INDEX "_ChampionshipPlayers_B_index" ON "_ChampionshipPlayers"("B");

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_player1Id_fkey" FOREIGN KEY ("player1Id") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_player2Id_fkey" FOREIGN KEY ("player2Id") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "Player"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_championshipId_fkey" FOREIGN KEY ("championshipId") REFERENCES "Championship"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionshipPlayers" ADD CONSTRAINT "_ChampionshipPlayers_A_fkey" FOREIGN KEY ("A") REFERENCES "Championship"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ChampionshipPlayers" ADD CONSTRAINT "_ChampionshipPlayers_B_fkey" FOREIGN KEY ("B") REFERENCES "Player"("id") ON DELETE CASCADE ON UPDATE CASCADE;
