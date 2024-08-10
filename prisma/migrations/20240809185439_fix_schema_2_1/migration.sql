/*
  Warnings:

  - You are about to drop the column `championshipId` on the `StandaloneMatch` table. All the data in the column will be lost.
  - You are about to drop the column `matchTier` on the `StandaloneMatch` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "StandaloneMatch" DROP CONSTRAINT "StandaloneMatch_championshipId_fkey";

-- AlterTable
ALTER TABLE "StandaloneMatch" DROP COLUMN "championshipId",
DROP COLUMN "matchTier";
