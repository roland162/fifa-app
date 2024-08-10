-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL,
    "championshipId" TEXT NOT NULL,
    "player1Id" TEXT NOT NULL,
    "player2Id" TEXT NOT NULL,
    "winnerId" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "matchTier" TEXT NOT NULL DEFAULT 'base',
    "player1Team" TEXT NOT NULL,
    "player2Team" TEXT NOT NULL,

    CONSTRAINT "Match_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Championship" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "playerIds" TEXT[],
    "semiFinalIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "finalId" TEXT NOT NULL DEFAULT '',
    "baseMatchIds" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "numberOFMatchesPerPlayer" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Championship_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "wins" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);
