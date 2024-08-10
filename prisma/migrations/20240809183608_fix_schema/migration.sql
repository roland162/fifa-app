-- DropForeignKey
ALTER TABLE "Match" DROP CONSTRAINT "Match_winnerId_fkey";

-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "wonMatchIds" TEXT[] DEFAULT ARRAY[]::TEXT[];
