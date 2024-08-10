-- AlterTable
ALTER TABLE "Championship" ALTER COLUMN "maxMatches" DROP NOT NULL,
ALTER COLUMN "numberOfMatchesPerPlayer" DROP NOT NULL;

-- CreateTable
CREATE TABLE "StandaloneMatch" (
    "id" TEXT NOT NULL,
    "player1Id" TEXT NOT NULL,
    "player2Id" TEXT NOT NULL,
    "winnerId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "matchTier" TEXT NOT NULL DEFAULT 'base',
    "player1Team" TEXT NOT NULL,
    "player2Team" TEXT NOT NULL,
    "isFinished" BOOLEAN NOT NULL DEFAULT false,
    "championshipId" TEXT,

    CONSTRAINT "StandaloneMatch_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StandaloneMatch" ADD CONSTRAINT "StandaloneMatch_player1Id_fkey" FOREIGN KEY ("player1Id") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandaloneMatch" ADD CONSTRAINT "StandaloneMatch_player2Id_fkey" FOREIGN KEY ("player2Id") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StandaloneMatch" ADD CONSTRAINT "StandaloneMatch_championshipId_fkey" FOREIGN KEY ("championshipId") REFERENCES "Championship"("id") ON DELETE SET NULL ON UPDATE CASCADE;
