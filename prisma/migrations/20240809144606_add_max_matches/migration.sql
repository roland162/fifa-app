/*
  Warnings:

  - Added the required column `maxMatches` to the `Championship` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Championship" ADD COLUMN     "maxMatches" INTEGER NOT NULL;
